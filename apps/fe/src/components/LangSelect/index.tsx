import { useState, useEffect } from 'react'
import { Select } from './styles'
import { useRouter } from 'next/router'
import { t } from '@lingui/macro'

type LOCALES = 'en' | 'uk' | 'pseudo'

export default function LangSelect ({toggleDrawer, ...props}:any){
    const router = useRouter()
    const [locale, setLocale] = useState<LOCALES>(
      router.locale!.split('-')[0] as LOCALES
    )

    const languages: { [key: string]: string } = {
      en: t`EN`,
      uk: t`UK`,
    }

    // enable 'pseudo' locale only for development environment
    if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
      languages['pseudo'] = t`PS`
    }

    useEffect(() => {
      router.push(router.pathname, router.pathname, { locale })
    }, [locale, router])

    
    return <>
      <Select value={locale} 
        onChange={(evt) => setLocale(evt.target.value as LOCALES)}
        name="lang" id="lang">
          {Object.keys(languages).map((locale) => {
            return (
              <option value={locale} key={locale}>
                {languages[locale as unknown as LOCALES]}
              </option>
            )
          })}
      </Select>
    </>
}