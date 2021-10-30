import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { cookies, atoms, useI18n } from 'common'
import { Select } from './styles'
const useForceUpdate = () => useState()[1];

export default ({toggleDrawer, ...props}:any)=>{
    const i18n = useI18n()
    const [lang, setLang] = useRecoilState(atoms.lang);
    const forceUpdate = useForceUpdate();

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
      if(event!==null){
      setLang(event.target.value as 'en'|'uk');
      cookies.set('lang', event.target.value, { path: '/' }); //add selected language in the cookies
      forceUpdate(undefined)
      }
    }
    
    return <>
      <Select value={lang} onChange={changeLanguage} name="lang" id="lang">
        <option value="en">EN</option>
        <option value="uk">UA</option>
      </Select>
    </>
}