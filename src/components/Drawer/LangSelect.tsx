import { ReactNode, useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem, Box, SelectChangeEvent } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import {ReactComponent as UKRFlag} from 'assets/images/flags/ukr.svg'
import {ReactComponent as ENFlag} from 'assets/images/flags/en.svg'
// import {ReactComponent as FIFlag} from 'assets/images/flags/fi.svg'
import { SvgIcon } from 'components'
import { cookies, atoms, useI18n } from 'misc'
const useForceUpdate = () => useState()[1];

export default ({toggleDrawer, ...props}:any)=>{
    const i18n = useI18n()
    const [lang, setLang] = useRecoilState(atoms.lang);
    const forceUpdate = useForceUpdate();
    const changeLanguage = (event: SelectChangeEvent<"en" | "uk">, child: ReactNode) => {
      if(event!==null){
      setLang(event.target.value as 'en'|'uk');
      cookies.set('lang', event.target.value, { path: '/' }); //add selected language in the cookies
      forceUpdate(undefined)
      }
    }
    

    return <Box {...props}><FormControl style={{width:"100%"}}>
        <InputLabel id="label-langSelect">{i18n('language')}</InputLabel>
        <Select
          labelId="label-langSelect"
          id="langSelect"
          value={lang}
          onChange={changeLanguage}
          label="lang"
          SelectDisplayProps={{ style : {display: 'flex'} }} 
        >

          <MenuItem value={'en'} role="radio" aria-label="english">
            <SvgIcon><ENFlag/></SvgIcon>
            English
          </MenuItem>
          <MenuItem value={'uk'} role="radio" aria-label="ukrainian" >
            <SvgIcon><UKRFlag/></SvgIcon>
            Українська
          </MenuItem>
        </Select>
    </FormControl></Box>
}