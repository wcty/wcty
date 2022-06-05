import { t, Trans } from '@lingui/macro'
import { Text } from '@ui'
import { UserInfoFragment, MemberInfoFragment } from 'generated'
import { useRouter } from 'next/router'
import { ContactSection  } from './styles'
import { useLang } from '@ui/common'
import { DateTimeFormatOptions, DateTime } from 'luxon'
import { ReactComponent as Org } from '@assets/icons/org_small.svg'
import { ReactComponent as Location } from '@assets/icons/popupLocation.svg'
import { ReactComponent as Time } from '@assets/icons/time.svg'
import { ReactComponent as Fb } from '@assets/icons/fb_small.svg'
import { ReactComponent as Tg } from '@assets/icons/telegram.svg'
import { ReactComponent as Insta } from '@assets/icons/insta.svg'

export default function UserProfile({userInfo, memberInfo}:{userInfo:UserInfoFragment, memberInfo?: MemberInfoFragment}) {
  const router = useRouter()
  const { id, user_id } = router.query

  const lang = useLang()  
  const f:DateTimeFormatOptions = {month: 'long', day: 'numeric', year:'numeric'};

  const registered_since = memberInfo && DateTime
    .fromISO(userInfo?.created_at)
    .setLocale(lang)
    .toLocaleString(f)

  return  <>
      <ContactSection>
        {userInfo.current_location && 
          <div><Location style={{transform:'scale(1.5)'}}/><Text>{userInfo.current_location}</Text></div>}
        <div><Time style={{transform:'scale(1.2)'}}/><Text>On the platform since {registered_since}</Text></div>
        {userInfo.org_members.map((o,key)=>
          <div key={key}><Org/><Text>Member of {o.org?.name}</Text></div>)}
        {userInfo.instagram_account &&
          <div><Insta/><Text>{userInfo.instagram_account}</Text></div>}
        {userInfo.facebook_account && 
          <div><Fb/><Text>{userInfo.facebook_account}</Text></div>}
        {userInfo.telegram_account && 
          <div><Tg/><Text>{userInfo.telegram_account}</Text></div>}
        <Text s='t5' semibold mb='1rem'>About:</Text>
        <Text s='t4' style={{lineHeight:'1.5rem'}}>{userInfo.about||<>{userInfo.display_name} <Trans>didn&apos;t fill «About» section in his profile yet ;(</Trans></>}</Text>
      </ContactSection>
  </>
}
