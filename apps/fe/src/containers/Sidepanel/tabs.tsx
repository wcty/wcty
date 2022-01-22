import { ReactComponent as Initiatives } from 'assets/icons/initiatives.svg'
import { ReactComponent as Settings } from 'assets/icons/settings.svg'
import { ReactComponent as MapIcon } from 'assets/icons/map.svg'
import { ReactComponent as OrgIcon } from 'assets/icons/orgs.svg'
import { ReactComponent as ProjectIcon } from 'assets/icons/projects.svg'
import { ReactElement } from 'react'

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
    en: "Map of initiatives",
    icon: <MapIcon/>
  }
]:
  user?
[
  {
    key: 'initiativeMap',
    en: "Map of initiatives",
    icon: <MapIcon/>
  },
  {
    key: 'myInitiatives',
    en: "My initiatives",
    icon: <Initiatives/>
  },
  {
    key: 'myOrganisations',
    en: "My organisations",
    icon: <OrgIcon/>
  },
  {
    key: 'settings',
    en: "Settings",
    icon: <Settings/>
  }
]:
[
  {
    key: 'initiativeMap',
    en: "Map of initiatives",
    icon: <MapIcon/>
  },
  {
    key: 'initiatives',
    en: "Initiatives",
    icon: <Initiatives/>
  },
  {
    key: 'organisations',
    en: "Organisations",
    icon: <OrgIcon/>
  }
]) as Tabs