import { Sidepanel, Stripe, UserIconCell, Menu, UserIconRow, IconCell, IconRow, LangCell, UserIconThumb, UserPhoto } from './styles'
import { ReactComponent as UserIcon } from 'assets/icons/user.svg'
import { ReactComponent as OrgIcon } from 'assets/icons/orgs.svg'
import { ReactComponent as ProjectIcon } from 'assets/icons/projects.svg'
import { ReactComponent as LoginIcon } from 'assets/icons/login.svg'
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg'
import { ReactComponent as Initiatives } from 'assets/icons/initiatives.svg'
import { ReactComponent as Settings } from 'assets/icons/settings.svg'
import { ReactComponent as MapIcon } from 'assets/icons/map.svg'

import { useState, ReactElement } from 'react'
import { auth, useI18n, useUser } from 'misc'
import { LangSelect } from 'components'
import { useHistory } from 'react-router'
import { i18n as i18nType } from 'misc'
export default function (){
  const user = useUser()
  const i18n = useI18n()
  const history = useHistory()
  
  type Tabs = readonly {
    key: keyof i18nType,
    icon: ReactElement
  }[]

  const tabs = (user?
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
    {
      key: 'settings',
      icon: <Settings/>
    }
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

  const [selected, setSelected] = useState<null|Tabs[number]['key']>(null)
  const [hovered, setHovered] = useState<null|Tabs[number]['key']>(null)


  function props(key:Tabs[number]['key']){
    return ({
      'data-selected':selected===key,
      'data-hovered':hovered===key,
      onMouseMove:()=>setHovered(key),
      onMouseLeave:()=>setHovered(null),
      onClick:()=>setSelected(key),
    })
  }
  

  return <>
    <Sidepanel>
      <Stripe>
        <div>
          <UserIconCell {...{...props('enter'), onClick:()=>{
            if(!user){history.push('/login')} }}}>
            {user? <UserPhoto src={user.avatar_url||''}/>: <UserIcon/>}
          </UserIconCell>
          {tabs.map((v,key)=>
            <IconCell {...{key,...props(v.key)}}>
                {v.icon}
            </IconCell>
          )}
        </div>
        <LangCell>
          <LangSelect/>
        </LangCell>
      </Stripe>
      <Menu className='menu'>
        <div>
          <UserIconRow {...{...props('enter'),onClick:()=>{
              if(!user){history.push('/login')} }}}>
            {user? 
              <span style={{textTransform:'uppercase'}}>
                {user.display_name}
              </span>:
            <>
              <span>
                {i18n('enter')}
              </span>
              <span>
                <LoginIcon/>
              </span>
            </>}
          </UserIconRow>
          {tabs.map((v,key)=>
            <IconRow {...{key,...props(v.key)}}>
                <span>
                  {i18n(v.key)}
                </span>
            </IconRow>
          )}
        </div>
        {user&&
          <UserIconRow style={{border:'none'}} 
          {...{...props('exit'),
            onClick:()=>{auth.logout()}}}>
              <span>
                {i18n('exit')}
              </span>
              <span>
                <LogoutIcon/>
              </span>
          </UserIconRow>
        }
      </Menu>
    </Sidepanel>
  </>
}
