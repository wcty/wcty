
import { SidepanelWrapper, Stripe, UserIconCell, Menu, UserIconRow, IconCell, IconRow, LangCell, UserPhoto, BottomPanel } from './styles'
import { ReactComponent as UserIcon } from '@assets/icons/user.svg'
import { ReactComponent as LogoutIcon } from '@assets/icons/logout.svg'
import { Trans } from '@lingui/macro'
import { useState, useEffect } from 'react'
import { atoms, auth,  client,  useLayout, useUser } from 'common'
import LangSelect from './LangSelect'
import { tabs, Tabs } from './tabs'
import Organizations from './Organizations'
import Initiatives from './Initiatives'
import Settings from './Settings'
import { atom, useRecoilState } from 'recoil'
import MenuHeader from './MenuHeader'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';
import User from '@assets/icons/user.png'

const cookies = new Cookies();

export default function Sidepanel (){
  const user = useUser()

  const router = useRouter()
  const isEntryCreation = router.pathname.includes('/create-initiative')


  const [selected, setSelected] = useState<null|Tabs[number]['key']>(null)
  const [hovered, setHovered] = useState<null|Tabs[number]['key']>(null)

  const [open, setOpen] = useRecoilState(Sidepanel.open)
  const [visible, setVisible] = useRecoilState(Sidepanel.visible)
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
    { visible && <SidepanelWrapper 
      onMouseOver={()=>!open&&layout!=='mobile'&&setOpen('menu')} 
      onMouseLeave={()=>open==='menu'&&layout!=='mobile'&&setOpen(false)} 
      open={open}>
      {layout==='desktop' && 
        <Stripe>
          <div>
            <UserIconCell {...{...props('enter'), onClick:()=>{
                const { pathname, query } = router
                cookies.set('callbackUrl', { pathname, query }, { path: '/' }); 
                if(!user){router.push('/login')} 
            }}}>
              {user? <UserPhoto src={
                user.avatar_url?.includes("platform-lookaside.fbsbx")?
                `http://graph.facebook.com/${
                  new URL(user.avatar_url).searchParams.get('asid')
                }/picture?type=large&redirect=true&width=50&height=50`:
                user.avatar_url||User.src
              } />: <UserIcon/>}
            </UserIconCell>
            {tabs(!!user, isEntryCreation).map((v,key)=>
              <IconCell {...{key,...props(v.key),
                ...(v.key==='initiativeMap'&&{ 
                  onClick:()=>{
                    setOpen(false);
                    setSelected(null);
                    router.push('/')
                  }
                })
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
              (selected==='settings'||selected==='organisations')?
              <Settings/>:
              null
          }
        </Menu>:
        <Menu className='menu'>
          <div>
            <MenuHeader {...{props}}/>
            {tabs(!!user, isEntryCreation).map((v,key)=>
              <IconRow {...{key,...props(v.key), 
                ...(v.key==='initiativeMap'&&{
                  onClick:()=>{
                    setOpen(false);
                    setSelected(null)
                    router.push('/')
                  }})
              }} >
                  <span>
                    {/* <Trans>{v.en}</Trans> */}
                    {v.en}
                  </span>
              </IconRow>
            )}
          </div>
          <div>
          <UserIconRow style={{border:'none'}} 
            {...{...props('about_platform'),
              onClick:()=>{router.push('/about'); setOpen(false);}}}>
                <span>
                  <Trans>About platform</Trans>
                </span>
                
            </UserIconRow>
          {user&&
            <UserIconRow style={{border:'none'}} 
            {...{...props('exit'),
              onClick:()=>{auth.logout();}}}>
                <span>
                  <Trans>Logout</Trans>
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
                <Trans>For any question please contact us at hi@weee.city</Trans>
              </div>
            </BottomPanel>}
          </div>
        </Menu>}
    </SidepanelWrapper> }
  </>
}

Sidepanel.open = atom({
  key:'sidepanelOpen',
  default: false as false|'menu'|'wide'
})

Sidepanel.visible = atom({
  key:'sidepanelVisible',
  default: true
})