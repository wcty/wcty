import { SidepanelWrapper, Stripe, UserIconCell, Menu, UserIconRow, IconCell, IconRow, LangCell, UserIconThumb, UserPhoto } from './styles'
import { ReactComponent as UserIcon } from 'assets/icons/user.svg'
import { ReactComponent as LoginIcon } from 'assets/icons/login.svg'
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg'

import { useState, useEffect } from 'react'
import { auth, useI18n, useUser } from 'common'
import { LangSelect } from 'components'
import { useHistory } from 'react-router'
import { tabs, Tabs } from './tabs'
import Organizations from './Organizations'
import Initiatives from './Initiatives'
import { atom, useRecoilState } from 'recoil'

export default function Sidepanel (){
  const user = useUser()
  const i18n = useI18n()
  const history = useHistory()
  

  const [selected, setSelected] = useState<null|Tabs[number]['key']>(null)
  const [hovered, setHovered] = useState<null|Tabs[number]['key']>(null)

  const [open, setOpen] = useRecoilState(Sidepanel.open)
  
  function props(key:Tabs[number]['key']){
    return ({
      'data-selected':selected===key,
      'data-hovered':hovered===key,
      onMouseEnter:()=>setHovered(key),
      onMouseLeave:()=>setHovered(null),
      onClick:()=>selected===key?(setSelected(null),setOpen('menu')):setSelected(key),
    })
  }

  useEffect(()=>{
    if(selected&&selected!=='enter'&&selected!=='initiativeMap'){
      setOpen('wide')
    }
  },[selected])

  return <>
    <SidepanelWrapper onMouseOver={()=>!open&&setOpen('menu')} onMouseLeave={()=>open==='menu'&&setOpen(false)} open={open}/*data-open={selected!=='initiativeMap'} data-active={selected&&selected!=='enter'&&selected!=='initiativeMap'}*/>
      <Stripe>
        <div>
          <UserIconCell {...{...props('enter'), onClick:()=>{
            if(!user){history.push('/login')} }}}>
            {user? <UserPhoto src={user.avatar_url||''}/>: <UserIcon/>}
          </UserIconCell>
          {tabs(!!user).map((v,key)=>
            <IconCell {...{key,...props(v.key),
              ...(v.key==='initiativeMap'&&{onClick:()=>{setOpen(false);setSelected(null)}})
            }}>
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
              <IconRow {...{key,...props(v.key), 
                ...(v.key==='initiativeMap'&&{onClick:()=>{setOpen(false);setSelected(null)}})
              }} >
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
    </SidepanelWrapper>
  </>
}

Sidepanel.open = atom({
  key:'sidepanelOpen',
  default: false as false|'menu'|'wide'
})
