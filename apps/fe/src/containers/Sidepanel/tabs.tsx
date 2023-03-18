import { ReactComponent as Initiatives } from '@assets/icons/initiatives.svg'
import { ReactComponent as Settings } from '@assets/icons/settings.svg'
import { ReactComponent as MapIcon } from '@assets/icons/map.svg'
import { ReactElement } from 'react'
import { t } from '@lingui/macro'

export type Tabs = readonly {
  key: any
  en: string
  icon: ReactElement
}[]

export const tabs = (user:boolean, creation=false)=>(
  creation?
[
  {
    key: 'initiativeMap',
    en: t`Map of initiatives`,
    icon: <MapIcon/>
  }
]:
  user?
[
  {  
    key: 'initiativeMap',
    en: t`Map of initiatives`,
    icon: <MapIcon/>
  }, 
  {   
    key: 'myInitiatives',
    en: t`My initiatives`,
    icon: <Initiatives/>
  }, 
  {   
    key: 'settings',
    en: t`Settings`,
    icon: <Settings/>
  }  
]:
[
  {
    key: 'initiativeMap',
    en: t`Map of initiatives`,
    icon: <MapIcon/>
  }, 
  {   
    key: 'initiatives',
    en: t`Initiatives`,
    icon: <Initiatives/>
  }
]) as Tabs