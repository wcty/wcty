import { useState, useEffect } from 'react'
import { default as defaultLang } from './defaultLang.json'
import { useRecoilValue } from 'recoil'
import { atoms } from 'shared'
import { useDictionaryQuery } from 'generated'

export type MapSchema<T extends Record<string, string>> = {
  -readonly [K in keyof T]: string
}

const dataObject = {...defaultLang} as const;

export type i18n = MapSchema<typeof dataObject>

export type I18nGetter = <K extends keyof i18n> (key:K, params?:any)=>i18n[K] 

export const useI18n = ()=>{
  const lang = useRecoilValue(atoms.lang)

  const [i18nData, setI18nData] = useState<i18n>({...defaultLang})
  const { data:dict, refetch:getDict } = useDictionaryQuery({ variables:{ en:true } })

  useEffect(()=>{
    if(getDict && !(dict?.i18n?.[0]?.[lang])){
      getDict({[lang]:true})
    }
  },[dict, getDict, lang])

  useEffect(()=>{
    if(dict?.i18n){
      const langObject:i18n = dict.i18n.reduce((a:any,b:any)=>{
        const {key, ...value} = b
        a[key]= value[lang]||Object.values(value)[0]
        return a
      }, {})
      console.log(dict, langObject)
      setI18nData(langObject)
    }
    
  },[dict, lang])


  return function getI18n<K extends keyof i18n>(key:K, ...params:(number|string|boolean)[]):i18n[K] {
    if ( params.length > 0) {
        let i18nKey = i18nData[key];
        const choiceRegex = /{#choice.*#}/g;
        if( i18nKey ) {
          for (let i = 0; i < params.length - 1; i++) {
            if( typeof params[i] !== 'boolean' ){
              i18nKey = i18nKey.replace(`{${i}}`, String(params[i]));
            }else{
              Choice(params[i], i18nKey, choiceRegex)
            }
          } 
        }
        return i18nKey;
    }else{
        return i18nData[key];
    }
  }
}

function Choice(value:any, i18nKey:String, choiceRegex:RegExp){
  for (const choicePattern of i18nKey.match(choiceRegex)??[]) {
    const choices = choicePattern.replace('{#choice','').replace('#}','').split('|')
    if(i18nKey){
      i18nKey = i18nKey.replace(choicePattern, choices[!value?0:1]);
    }
  }
}
