import { SidepanelWrapper, UserIconCell, Menu, UserIconRow, IconRow, LangCell, UserPhoto, CloseButton, LogoRow, BottomPanel } from './styles'
import { ReactComponent as UserIcon } from 'assets/icons/user.svg'
import { ReactComponent as LoginIcon } from 'assets/icons/login.svg'
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg'
import { ReactComponent as CloseIcon } from 'assets/icons/close-icon.svg'
import { ReactComponent as WecityText } from 'assets/icons/wecity-text.svg'
import { ReactComponent as AnonIcon } from 'assets/icons/anon-icon.svg'

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

  const [open, setOpen] = useRecoilState(Sidepanel.open)
  
  function props(key:Tabs[number]['key']){
    return ({
      'data-selected':selected===key,
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
    <SidepanelWrapper open={open}>

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
            <LogoRow {...{...props('enter')}}>
                <span>
                  <WecityText/>
                </span>
                <CloseButton onClick={()=>{setOpen(false)}}>
                  <CloseIcon/>
                </CloseButton>
            </LogoRow>
            <UserIconRow {...{...props('enter'),onClick:()=>{
                if(!user){history.push('/login')} }}}>
              {user? 
                <span style={{textTransform:'uppercase'}}>
                  <img src={
                    user.avatar_url?.includes("platform-lookaside.fbsbx")?
                    `http://graph.facebook.com/${
                      new URL(user.avatar_url).searchParams.get('asid')
                    }/picture?type=large&redirect=true&width=50&height=50`:
                    user.avatar_url||''
                  }/>
                  {user.display_name}
                </span>:
              <>
                <span>
                  <AnonIcon/>
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
          <div>
            {user &&
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
            <BottomPanel>
              <div>
                <LangSelect/>
              </div>
              <div>
                {i18n('write_us')}
              </div>
            </BottomPanel>
          </div>
        </Menu>}

    </SidepanelWrapper>
  </>
}

Sidepanel.open = atom({
  key:'sidepanelMobileOpen',
  default: false as false|'menu'|'wide'
})
