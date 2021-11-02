
import { UserIconRow, LogoRow, CloseButton } from './styles'
import { ReactComponent as LoginIcon } from 'assets/icons/login.svg'
import { ReactComponent as CloseIcon } from 'assets/icons/close-icon.svg'
import { ReactComponent as WecityText } from 'assets/icons/wecity-text.svg'
import { ReactComponent as AnonIcon } from 'assets/icons/anon-icon.svg'

import { useState, useEffect } from 'react'
import { useI18n, useLayout, useUser } from 'common'
import { useHistory } from 'react-router'
import { Tabs } from './tabs'
import { useRecoilState } from 'recoil'
import Sidepanel from '.'

type MenuHeaderProps = {
  props(key: Tabs[number]['key']): {
    'data-selected': boolean;
    'data-hovered': boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onClick: () => void;
  }
}

export default function MenuHeader ({props}:MenuHeaderProps){
  const user = useUser()
  const i18n = useI18n()
  const history = useHistory()
  
  const [open, setOpen] = useRecoilState(Sidepanel.open)
  const layout = useLayout()

  return layout==='desktop'?
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
    </UserIconRow>:
    <>
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
  </>
}
