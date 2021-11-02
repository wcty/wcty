
import { SidepanelWrapper, Stripe, UserIconCell, Menu, UserIconRow, IconCell, IconRow, LangCell, UserPhoto, BottomPanel } from './styles'
import { ReactComponent as UserIcon } from 'assets/icons/user.svg'
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg'

import { useState, useEffect } from 'react'
import { auth, useI18n, useLayout, useUser } from 'common'
import { LangSelect } from 'components'
import { useHistory } from 'react-router'
import { tabs, Tabs } from './tabs'
import Organizations from './Organizations'
import Initiatives from './Initiatives'
import { atom, useRecoilState } from 'recoil'
import MenuHeader from './MenuHeader'

export default function Sidepanel (){
  const user = useUser()
  const i18n = useI18n()
  const history = useHistory()
  

  const [selected, setSelected] = useState<null|Tabs[number]['key']>(null)
  const [hovered, setHovered] = useState<null|Tabs[number]['key']>(null)

  const [open, setOpen] = useRecoilState(Sidepanel.open)
  const layout = useLayout()
  
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

  useEffect(()=>{
    if(open==='menu'){
      setSelected(null)
    }
  },[open])

  return <>
    <SidepanelWrapper 
      onMouseOver={()=>!open&&layout!=='mobile'&&setOpen('menu')} 
      onMouseLeave={()=>open==='menu'&&layout!=='mobile'&&setOpen(false)} 
      open={open}>
      {layout==='desktop' && 
        <Stripe>
          <div>
            <UserIconCell {...{...props('enter'), onClick:()=>{
              if(!user){history.push('/login')} }}}>
              {user? <UserPhoto src={
                user.avatar_url?.includes("platform-lookaside.fbsbx")?
                `http://graph.facebook.com/${
                  new URL(user.avatar_url).searchParams.get('asid')
                }/picture?type=large&redirect=true&width=50&height=50`:
                user.avatar_url||''
              }/>: <UserIcon/>}
            </UserIconCell>
            {tabs(!!user).map((v,key)=>
              <IconCell {...{key,...props(v.key),
                ...(v.key==='initiativeMap'&&{onClick:()=>{setOpen(false);setSelected(null);history.push('/')}})
              }}>
                  {v.icon}
              </IconCell>
            )}
          </div>
          <LangCell>
            <LangSelect/>
          </LangCell>
        </Stripe>}

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
            <MenuHeader {...{props}}/>
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
          <div>
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
            {layout==='mobile' && 
            <BottomPanel>
              <div>
                <LangSelect/>
              </div>
              <div>
                {i18n('write_us')}
              </div>
            </BottomPanel>}
          </div>
        </Menu>}
    </SidepanelWrapper>
  </>
}

Sidepanel.open = atom({
  key:'sidepanelOpen',
  default: false as false|'menu'|'wide'
})
