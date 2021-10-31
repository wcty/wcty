import { default as defaultLang } from './defaultLang.json'
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import { atoms, Mutable } from 'common'
import { DictionaryQuery, useDictionaryQuery } from 'generated'
import { useEffect } from 'react'

export type MapSchema<T extends Record<string, string>> = {
  -readonly [K in keyof T]: string
}

const dataObject = {...defaultLang} as const;

export type i18n = MapSchema<typeof dataObject>

export type I18nGetter = <K extends keyof i18n> (key:K, ...params:(number|string|boolean)[])=>i18n[K]|string

export const useI18n = ()=>{
  const lang = useRecoilValue(atoms.lang)
  const dict = useRecoilValue(useI18n.dict)



  return function getI18n(key, ...params) {
    const langObject:i18n = dict.i18n.reduce((a:any,b:any)=>{
      const {key, ...value} = b
      a[key]= value[lang]//||Object.values(value)[0]
      return a
    }, {})

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
  default: {i18n:
    Object.entries({...defaultLang})
      .map(([key, value])=>({key, en:value}))
  } as DictionaryQuery
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
      setDict(dictData)
    }
  },[dictData])

  return null
}