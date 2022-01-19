import { i18n as i18nType } from 'common'
import { ReactComponent as Initiatives } from 'assets/icons/initiatives.svg'
import { ReactComponent as Settings } from 'assets/icons/settings.svg'
import { ReactComponent as MapIcon } from 'assets/icons/map.svg'
import { ReactComponent as OrgIcon } from 'assets/icons/orgs.svg'
import { ReactComponent as ProjectIcon } from 'assets/icons/projects.svg'
import { ReactElement } from 'react'

export type Tabs = readonly {
  key: keyof i18nType,
  icon: ReactElement
}[]

export const tabs = (user:boolean, creation:boolean=false)=>(
  creation?
[
  {
    key: 'initiativeMap',
    icon: <MapIcon/>
  }
]:
  user?
[
  {
    key: 'initiativeMap',
    icon: <MapIcon/>
  },
  {
    key: 'myInitiatives',
    icon: <Initiatives/>
  },
  {
    key: 'myOrganisations',
    icon: <OrgIcon/>
  },
  // {
  //   key: 'settings',
  //   icon: <Settings/>
  // }
]:
[
  {
    key: 'initiativeMap',
    icon: <MapIcon/>
  },
  {
    key: 'initiatives',
    icon: <Initiatives/>
  },
  {
    key: 'organisations',
    icon: <OrgIcon/>
  }
]) as Tabs