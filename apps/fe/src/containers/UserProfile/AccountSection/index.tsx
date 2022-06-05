import { t, Trans } from '@lingui/macro'
import { Title, Text, Button } from '@ui'
import { UserInfoFragment, MemberInfoFragment } from 'generated'
import { useRouter } from 'next/router'
import { AccountSection, Avatar } from './styles'
import UserDefault from '@assets/icons/user.png'
import { useLang } from '@ui/common'
import { DateTimeFormatOptions, DateTime } from 'luxon'
import { useLayout } from 'common'
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
  const layout = useLayout()
  const roles = memberInfo && getRoles(memberInfo)
  const lang = useLang()  
  const f:DateTimeFormatOptions = {month: 'long', day: 'numeric', year:'numeric'};
  const date_created = memberInfo && DateTime
    .fromISO(memberInfo.created_at)
    .setLocale(lang)
    .toLocaleString(f)

  return  <>
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
        <Button t='primary' mt='2rem' s='small' width={layout==='desktop'?'100%':'50%'} justifyContent='center'>Send message</Button>
      </>}
    </AccountSection>
  </>
}
