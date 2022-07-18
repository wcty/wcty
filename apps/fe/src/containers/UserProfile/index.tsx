import { t, Trans } from '@lingui/macro'
import { Text } from '@ui'
import { Container } from 'containers/Initiative/styles'
import { UserInfoFragment, MemberInfoFragment } from 'generated'
import { useRouter } from 'next/router'
import { ButtonBack, Content, Header, TextWrapper } from './styles'
import { useEffect } from 'react'
import { ReactComponent as WecityText } from '@assets/icons/wecity-text.svg'
import { useRecoilState } from 'recoil'
import Sidebar from "containers/Sidepanel";
import { useLayout } from 'common'
import AccountSection from './AccountSection'
import InitiativeSection from './InitiativeSection'
import ContactSection from './ContactSection'
import { useUserData } from '@nhost/nextjs';


export default function UserProfile({userInfo, memberInfo}:{userInfo:UserInfoFragment, memberInfo?: MemberInfoFragment}) {
  const router = useRouter()
  const { id, user_id } = router.query
  const [,setVisible] = useRecoilState(Sidebar.visible)
  const layout = useLayout()
  const user = useUserData()

  useEffect(()=>{
    if(layout==='mobile'){
      setVisible(false)
    }else{
      setVisible(true)
    }
    return ()=>setVisible(true)
  },[layout])

  return  <Container>
    <div style={{position:'absolute', top:'5rem', left: '-140px', transform:'scale(1.5)'}}>
      <WecityText/>
    </div>
    {memberInfo ? <Header>
      <ButtonBack onClick={()=>{
        router.push({
            pathname: `/initiative/[id]`, 
            query: { id }
          }, 
          `/initiative/${id}`, 
          { locale: router.locale }
        ).then(()=>setVisible(true))
      }}/>
      <TextWrapper>
        <Text s='t4' mb='1rem' c='label' style={{textAlign:'start', marginBottom:'0'}}>{memberInfo?.initiative.name}</Text>
      </TextWrapper>
    </Header>:
    <Header>
      <ButtonBack onClick={()=>{
        router.back()
      }}/>
    </Header>}
    <Content>
      <AccountSection {...{userInfo, memberInfo}}/>
      <InitiativeSection {...{userInfo, memberInfo}}/>
      <ContactSection {...{userInfo, memberInfo}}/>
    </Content>
  </Container>
}
