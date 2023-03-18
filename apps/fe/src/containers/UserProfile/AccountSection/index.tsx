import { t, Trans } from '@lingui/macro'
import { Title, Text, Button } from '@ui'
import { UserInfoFragment, MemberInfoFragment, useUpsertChatMutation, useChatQuery } from 'generated'
import { useRouter } from 'next/router'
import { AccountSection, Avatar, AvatarContainer } from './styles'
import UserDefault from '@assets/icons/user.png'
import { useLang } from '@ui/common'
import { DateTimeFormatOptions, DateTime } from 'luxon'
import { useLayout, useUser } from 'common'

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
  const user = useUser()

  const { id, user_id } = router.query
  const layout = useLayout()
  const roles = memberInfo && getRoles(memberInfo)
  const lang = useLang()  
  const f:DateTimeFormatOptions = {month: 'long', day: 'numeric', year:'numeric'};
  const date_created = memberInfo && DateTime
    .fromISO(memberInfo.created_at)
    .setLocale(lang)
    .toLocaleString(f)

  const { data:chat } = useChatQuery({
    variables: {
      initiative_id:id, 
      member: user_id,
      me:user?.id
    }
  })
  
  const [upsertChat] = useUpsertChatMutation({
    variables:{
      initiative_id:id, 
      members:[{user_id: user_id}, {user_id: user?.id}]
    }
  })

  return  <>
    <AccountSection>
      <AvatarContainer><Avatar referrerPolicy="no-referrer" src={userInfo.avatar_url||UserDefault?.src} /></AvatarContainer>
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
        {user?.id && userInfo.id!==user.id && <Button 
          t='primary' 
          mt='2rem' 
          s='small' 
          onClick={
            ()=>chat?.initiative_chats?.[0] ? 
              router.push(`/initiative/${id}/chats/${chat.initiative_chats[0].id}`):
              upsertChat()
                .then(v=>
                  v?.data?.insert_initiative_chats_one?.id && 
                  router.push(`/initiative/${id}/chats/${v?.data?.insert_initiative_chats_one?.id}`)
                )
          }
          width={layout==='desktop'?'100%':'50%'} 
          justifyContent='center'>
            Send message
        </Button>}
      </>}
    </AccountSection>
  </>
}
