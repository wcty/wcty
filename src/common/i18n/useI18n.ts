import { default as defaultLang } from './defaultLang.json'
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import { atoms, Mutable } from 'common'
import { DictionaryDocument, DictionaryQuery, useDictionaryQuery } from 'generated'
import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { ApolloClient, InMemoryCache } from '@apollo/client'

export type MapSchema<T extends Record<string, string>> = {
  -readonly [K in keyof T]: string
}

const dataObject = {...defaultLang} as const;

export type i18n = MapSchema<typeof dataObject>

export type I18nGetter = <K extends keyof i18n> (key:K, ...params:(number|string|boolean)[])=>i18n[K]|string

export function getLangObject(dict:DictionaryQuery, lang:string){
  return dict.i18n.reduce((a:any,b:any)=>{
    const {key, ...value} = b
    a[key]= value[lang]
    return a
  }, {}) as i18n
}

export const useI18n = ()=>{
  const langObject = useRecoilValue(useI18n.dict)
  return function getI18n(key, ...params) {

    if ( params.length > 0 ) {
        let i18nKey = `${langObject[key]}`;

        if( i18nKey ) {
          
          for (let i = 0; i < params.length; i++) {
            if( typeof params[i] !== 'boolean' ){
              i18nKey = i18nKey.replace(`{${i}}`, String(params[i]));
            }else{
              i18nKey = Choice(params[i], i18nKey);
            }
          } 
        }
        return i18nKey;
    }else{
        return langObject[key];
    }
  } as I18nGetter
}

useI18n.dict = atom({
  key: 'i18nDict',
  default: getLangObject(
    {i18n:
      Object.entries({...defaultLang})
        .map(([key, value])=>({key, en:value}))
    } as DictionaryQuery,
    'en')
})


function Choice(value:any, i18nKey:string){
  const choiceRegex = /{#choice.*#}/g;
  for (const choicePattern of i18nKey.match(choiceRegex)??[]) {
    const choices = choicePattern.replace('{#choice','').replace('#}','').split('|')
    if(i18nKey){
      i18nKey.replace(choicePattern, choices[!value?0:1]);
    }
  }
  return i18nKey;
}

export function useI18nDictionary(){
  const lang = useRecoilValue(atoms.lang)
  const [dict, setDict] = useRecoilState(useI18n.dict)
  const { data:dictData } = useDictionaryQuery({ 
    variables:{[lang]:true}, 
    fetchPolicy: 'cache-first',
    nextFetchPolicy: 'cache-only',
    refetchWritePolicy: 'merge'
  })

  useEffect(()=>{
    if(dictData?.i18n?.[0]?.[lang]){
      setDict(getLangObject(dictData,lang))
    }
  },[dictData])

  return null
}

export const client = new ApolloClient({
  ssrMode: true,
  uri: "https://hasura-aws.weee.city/v1/graphql",
  cache: new InMemoryCache(),
})

export const getLangServerSideProps:GetServerSideProps = async (ctx) => {
  const { req:{ cookies }, res } = ctx
  let data: DictionaryQuery | undefined
  if(cookies.lang){
    data = (await client.query<DictionaryQuery | undefined>({
      query: DictionaryDocument,
      variables:{[cookies.lang]: true},
    })).data;
  } 

  return { props: { serverDictData: data, lang:cookies.lang } }
}

export type ServerI18nProps = {
  serverDictData?: DictionaryQuery, 
  lang?:string
}

export const useServerI18n = (props:ServerI18nProps)=>{
  const [lang, setLang] = useRecoilState(atoms.lang)
  const [dict, setDict] = useRecoilState(useI18n.dict)
  useEffect(()=>{
    if(props.lang){ setLang(props.lang as any) }
    if(props.serverDictData){ setDict( getLangObject(props.serverDictData, lang)) }  
  },[])
  return null
}
