import { ReactComponent as Initiatives } from '@assets/icons/initiatives.svg'
import { ReactComponent as Settings } from '@assets/icons/settings.svg'
import { ReactComponent as MapIcon } from '@assets/icons/map.svg'
import { ReactComponent as OrgIcon } from '@assets/icons/orgs.svg'
import { ReactComponent as ProjectIcon } from '@assets/icons/projects.svg'
import { ReactElement } from 'react'
import { t } from '@lingui/macro'

export type Tabs = readonly {
  key: any
  en: string
  icon: ReactElement
}[]

export const tabs = (user:boolean, creation:boolean=false)=>(
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
    key: 'myOrganisations',
    en: t`My organisations`,
    icon: <OrgIcon/>
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
  }, 
  {   
    key: 'organisations',
    en: t`Organisations`,
    icon: <OrgIcon/>
  }
]) as Tabs