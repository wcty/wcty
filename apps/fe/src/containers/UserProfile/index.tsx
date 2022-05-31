import { t, Trans } from '@lingui/macro'
import { Title, Text, Button } from '@ui'
import { Container } from 'containers/Initiative/styles'
import { UserInfoFragment, MemberInfoFragment } from 'generated'
import { useRouter } from 'next/router'
import { AccountSection, Avatar, ButtonBack, ContactSection, Content, Header, InitiativeSection  } from './styles'
import { useEffect, useState } from 'react'
import { ReactComponent as WecityText } from '@assets/icons/wecity-text.svg'
import { useRecoilState } from 'recoil'
import Sidebar from "containers/Sidepanel";
import { useLayout } from 'common'
import UserDefault from '@assets/icons/user.png'
import { useLang } from '@ui/common'
import { DateTimeFormatOptions, DateTime } from 'luxon'
import { ReactComponent as Org } from '@assets/icons/org_small.svg'
import { ReactComponent as Location } from '@assets/icons/popupLocation.svg'
import { ReactComponent as Time } from '@assets/icons/time.svg'
import { ReactComponent as Fb } from '@assets/icons/fb_small.svg'
import { ReactComponent as Tg } from '@assets/icons/telegram.svg'
import { ReactComponent as Insta } from '@assets/icons/insta.svg'
import { ReactComponent as Mail } from '@assets/icons/mail.svg'
import { ReactComponent as Layers } from '@assets/icons/layers.svg'

const getRoles = (m: MemberInfoFragment)=>{
  const roles = []
  
  if(m.initiated.aggregate?.count){
    roles.push(t`Initiator`)
  }
  if(m?.volunteers_aggregate?.aggregate?.count){
    roles.push(t`Volunteer`)
  }
  if(m?.donations_aggregate?.aggregate?.count){
    roles.push(t`Donor`)
  }
  return roles.join(', ')
}

export default function UserProfile({userInfo, memberInfo}:{userInfo:UserInfoFragment, memberInfo?: MemberInfoFragment}) {
  const router = useRouter()
  const { id, user_id } = router.query
  const [keyword, setKeyword] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  const [,setVisible] = useRecoilState(Sidebar.visible)
  const layout = useLayout()

  useEffect(()=>{
    if(layout==='mobile'){
      setVisible(false)
    }else{
      setVisible(true)
    }
  },[layout])


  const roles = memberInfo && getRoles(memberInfo)
  const lang = useLang()  
  const f:DateTimeFormatOptions = {month: 'long', day: 'numeric', year:'numeric'};
  const date_created = memberInfo && DateTime
    .fromISO(memberInfo.created_at)
    .setLocale(lang)
    .toLocaleString(f)

  const registered_since = memberInfo && DateTime
    .fromISO(userInfo?.created_at)
    .setLocale(lang)
    .toLocaleString(f)
    

  return  <Container>
    <div style={{position:'absolute', top:'5rem', left: '-140px', transform:'scale(1.5)'}}><WecityText/></div>
    {memberInfo && <Header>
      <ButtonBack onClick={()=>{
        router.push({
          pathname: `/initiative/[id]`, 
          query: { id }
        }, 
        `/initiative/${id}`, 
        { locale: router.locale }
      )
      }}/>
      <div>
        <Text s='t4' mb='1rem' c='label' style={{textAlign:'start', marginBottom:'0'}}>{memberInfo?.initiative.name}</Text>
      </div>
    </Header>}
    <Content>
      <AccountSection>
        <Avatar src={userInfo.avatar_url||UserDefault?.src} />
        <Title s='h2'>{userInfo.display_name}</Title>
        {roles && <Text>{roles}</Text>}
        {memberInfo && 
        <>
          {memberInfo.initiated.aggregate?.count!==0 ?
          <Text style={{textAlign:'center'}}>
            <br/>
              {userInfo.display_name} created initiative «{memberInfo.initiative.name}» 
              <br/>on {date_created}
          </Text>:
          <Text style={{textAlign:'center', lineHeight:'1.5rem'}}>
            <br/>
              {userInfo.display_name} joined initiative «{memberInfo.initiative.name}» 
              <br/>on {date_created}
          </Text>}
          <Button t='primary' mt='2rem' s='small' width='100%' justifyContent='center'>Send message</Button>
        </>}
      </AccountSection>
      <InitiativeSection>

      </InitiativeSection>
      <ContactSection>
            {userInfo.current_location && 
              <div><Location style={{transform:'scale(1.5)'}}/><Text>{userInfo.current_location}</Text></div>}
            <div><Time style={{transform:'scale(1.2)'}}/><Text>On the platform since {registered_since}</Text></div>
            {userInfo.org_members.map(o=>
              <div><Org/><Text>Member of {o.org?.name}</Text></div>)}
            {userInfo.instagram_account &&
              <div><Insta/><Text>{userInfo.instagram_account}</Text></div>}
            {userInfo.facebook_account && 
              <div><Fb/><Text>{userInfo.facebook_account}</Text></div>}
            {userInfo.telegram_account && 
              <div><Tg/><Text>{userInfo.telegram_account}</Text></div>}
            <Text s='t5' semibold mb='1rem'>About:</Text>
            <Text s='t4' style={{lineHeight:'1.5rem'}}>{userInfo.about||<>{userInfo.display_name} <Trans>didn't fill «About» section in his profile yet ;(</Trans></>}</Text>
      </ContactSection>
    </Content>
  </Container>
}