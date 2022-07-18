
import { UserIconRow, LogoRow, CloseButton } from './styles'
import { ReactComponent as LoginIcon } from '@assets/icons/login.svg'
import { ReactComponent as CloseIcon } from '@assets/icons/close-icon.svg'
import { ReactComponent as WecityText } from '@assets/icons/wecity-text.svg'
import { ReactComponent as AnonIcon } from '@assets/icons/anon-icon.svg'
import { Trans } from '@lingui/macro'

import { fixAvatar,  useLayout } from 'common'
import { Tabs } from './tabs'
import { useRecoilState } from 'recoil'
import Sidepanel from '.'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';
import { useUserData } from '@nhost/nextjs';

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
  const user = useUserData()
  const router = useRouter()
  
  const [open, setOpen] = useRecoilState(Sidepanel.open)
  const layout = useLayout()

  return layout==='desktop'?
    <UserIconRow {...{...props('enter'),onClick:()=>{
        const { pathname, query } = router
        cookies.set('callbackUrl', { pathname, query }, { path: '/' }); 
        if(!user){ 
          router.push('/login') 
        }else{
          router.push({
              pathname: `/users/[user_id]`, 
              query: { user_id: user.id }
            }, 
            `/users/${user.id}`, 
            { locale: router.locale }
          )
        }

      }}}>
      {user? 
        <span style={{textTransform:'uppercase'}}>
          {user.displayName}
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
        if(!user){ 
          router.push('/login') 
        }else{
          router.push({
              pathname: `/users/[user_id]`, 
              query: { user_id: user.id }
            }, 
            `/users/${user.id}`, 
            { locale: router.locale }
          )
        }
      }}}>
      {user? 
        <span style={{textTransform:'uppercase'}}>
          <img src={fixAvatar(user?.avatarUrl)}/>
          {user.displayName}
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
