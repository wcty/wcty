import { Sidepanel, Stripe, UserIconCell, Menu, UserIconRow, IconCell, IconRow, LangCell, UserIconThumb, UserPhoto } from './styles'
import { ReactComponent as UserIcon } from 'assets/icons/user.svg'
import { ReactComponent as LoginIcon } from 'assets/icons/login.svg'
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg'

import { useState, useEffect } from 'react'
import { auth, useI18n, useUser } from 'misc'
import { LangSelect } from 'components'
import { useHistory } from 'react-router'
import { tabs, Tabs } from './tabs'
import Organizations from './Organizations'
import Initiatives from './Initiatives'

export default function (){
  const user = useUser()
  const i18n = useI18n()
  const history = useHistory()
  

  const [selected, setSelected] = useState<null|Tabs[number]['key']>(null)
  const [hovered, setHovered] = useState<null|Tabs[number]['key']>(null)


  function props(key:Tabs[number]['key']){
    return ({
      'data-selected':selected===key,
      'data-hovered':hovered===key,
      onMouseMove:()=>setHovered(key),
      onMouseLeave:()=>setHovered(null),
      onClick:()=>selected===key?setSelected(null):setSelected(key),
    })
  }

  return <>
    <Sidepanel data-open={selected!=='initiativeMap'} data-active={selected&&selected!=='enter'&&selected!=='initiativeMap'}>
      
      <Stripe>
        <div>
          <UserIconCell {...{...props('enter'), onClick:()=>{
            if(!user){history.push('/login')} }}}>
            {user? <UserPhoto src={user.avatar_url||''}/>: <UserIcon/>}
          </UserIconCell>
          {tabs(!!user).map((v,key)=>
            <IconCell {...{key,...props(v.key)}}>
                {v.icon}
            </IconCell>
          )}
        </div>
        <LangCell>
          <LangSelect/>
        </LangCell>
      </Stripe>

      {selected && selected!=='initiativeMap' ?
        <Menu className='menu'>
          {
            (selected==='myInitiatives'||selected==='initiatives')?
              <Initiatives/>:
            (selected==='myOrganisations'||selected==='organisations')?
              <Organizations/>:
              null
          }
        </Menu>:
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
            {tabs(!!user).map((v,key)=>
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
        </Menu>}
    </Sidepanel>
  </>
}
