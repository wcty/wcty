import { Sidepanel, Stripe, UserIconCell, Menu, UserIconRow, IconCell, IconRow, LangCell, UserIconThumb, UserPhoto } from './styles'
import { ReactComponent as UserIcon } from 'assets/icons/user.svg'
import { ReactComponent as OrgIcon } from 'assets/icons/orgs.svg'
import { ReactComponent as ProjectIcon } from 'assets/icons/projects.svg'
import { ReactComponent as LoginIcon } from 'assets/icons/login.svg'
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg'
import { ReactComponent as Initiatives } from 'assets/icons/initiatives.svg'
import { ReactComponent as Settings } from 'assets/icons/settings.svg'

import { useState } from 'react'
import { auth, useI18n, useUser } from 'misc'
import { LangSelect } from 'components'
import { useHistory } from 'react-router'

export default function (){
  const user = useUser()
  const i18n = useI18n()
  const history = useHistory()
  
  const tabs = user?
  [
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
  ] as const:
  [
    {
      key: 'organisations',
      icon: <OrgIcon/>
    },
    {
      key: 'projectLibrary',
      icon: <ProjectIcon/>
    }
  ] as const

  type Tabs = typeof tabs[number]['key']|'enter'|'exit'

  const [selected, setSelected] = useState<null|Tabs>(null)
  const [hovered, setHovered] = useState<null|Tabs>(null)


  function props(key:Tabs){
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
          <UserIconThumb className='thumb'>
            <div/>
          </UserIconThumb>
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
