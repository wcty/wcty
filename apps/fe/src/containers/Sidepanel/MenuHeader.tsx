
import { UserIconRow, LogoRow, CloseButton } from './styles'
import { ReactComponent as LoginIcon } from 'assets/icons/login.svg'
import { ReactComponent as CloseIcon } from 'assets/icons/close-icon.svg'
import { ReactComponent as WecityText } from 'assets/icons/wecity-text.svg'
import { ReactComponent as AnonIcon } from 'assets/icons/anon-icon.svg'
import { Trans } from '@lingui/macro'

import { fixAvatar,  useLayout, useUser } from 'common'
import { Tabs } from './tabs'
import { useRecoilState } from 'recoil'
import Sidepanel from '.'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

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
  const router = useRouter()
  
  const [open, setOpen] = useRecoilState(Sidepanel.open)
  const layout = useLayout()

  return layout==='desktop'?
    <UserIconRow {...{...props('enter'),onClick:()=>{
        const { pathname, query } = router
        cookies.set('callbackUrl', { pathname, query }, { path: '/' }); 
        if(!user){ router.push('/login') } 

      }}}>
      {user? 
        <span style={{textTransform:'uppercase'}}>
          {user.display_name}
        </span>:
      <>
        <span>
          <Trans>Login</Trans>
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
        setOpen(false)
        const { pathname, query } = router
        cookies.set('callbackUrl', { pathname, query }, { path: '/' }); 
        if(!user){ router.push('/login') } 
      }}}>
      {user? 
        <span style={{textTransform:'uppercase'}}>
          <img src={fixAvatar(user?.avatar_url)}/>
          {user.display_name}
        </span>:
      <>
        <span>
          <AnonIcon/>
          <Trans>Login</Trans>
        </span>
        <span>
          <LoginIcon/>
        </span>
      </>}
    </UserIconRow>
  </>
}
