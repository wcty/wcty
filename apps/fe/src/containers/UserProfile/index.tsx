import { t, Trans } from '@lingui/macro'
import { Title, Text, Button } from '@ui'
import { Container } from 'containers/Initiative/styles'
import { UserInfoFragment, MemberInfoFragment } from 'generated'
import { useRouter } from 'next/router'
import { AccountSection, Avatar, ButtonBack, ContactSection, Content, Dot, Dots, Header, Icon, InitiativeList, InitiativeSection, Slide, SlideWrapper, SwipeableViews  } from './styles'
import { useEffect, useState } from 'react'
import { ReactComponent as WecityText } from '@assets/icons/wecity-text.svg'
import { useRecoilState } from 'recoil'
import Sidebar from "containers/Sidepanel";
import { atoms, useLayout } from 'common'
import UserDefault from '@assets/icons/user.png'
import { useLang } from '@ui/common'
import { DateTimeFormatOptions, DateTime } from 'luxon'
import { ReactComponent as Org } from '@assets/icons/org_small.svg'
import { ReactComponent as Location } from '@assets/icons/popupLocation.svg'
import { ReactComponent as Time } from '@assets/icons/time.svg'
import { ReactComponent as Fb } from '@assets/icons/fb_small.svg'
import { ReactComponent as Tg } from '@assets/icons/telegram.svg'
import { ReactComponent as Insta } from '@assets/icons/insta.svg'
import { ReactComponent as Paw } from '@assets/icons/paw.svg'
import { ReactComponent as Tasks } from '@assets/icons/tasks.svg'
import { ReactComponent as Gift } from '@assets/icons/gift.svg'
import { ReactComponent as Lightning } from '@assets/icons/lightning.svg'
import ListRow from 'components/ListRow'
import Slides from 'containers/Slides'

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
  const [,setVisible] = useRecoilState(Sidebar.visible)
  const layout = useLayout()
  const [index, onChangeIndex] = useState(0)
  console.log(index)
  useEffect(()=>{
    if(layout==='mobile'){
      setVisible(false)
    }else{
      setVisible(true)
    }
  },[layout])
  const [focus, setFocus] = useRecoilState(atoms.focalPoint)
  const [slideIndex, setSlideIndex] = useRecoilState(Slides.index)
  const [viewport, setViewport] = useRecoilState(atoms.viewport)
  const [selected, setSelected] = useRecoilState(atoms.selected)

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

  const member_in_initiatives = userInfo.initiatives_total.aggregate?.count
  const completed_tasks = userInfo.tasks_completed.aggregate?.count
  const donated_money = userInfo.donated_total.aggregate?.sum?.amount
  const initiatied_count = userInfo.initiated_count.aggregate?.count
  const org_count = userInfo.org_members.length


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
        <SwipeableViews
          {...{index, onChangeIndex}}
          enableMouseEvents
        >
          <SlideWrapper>
            <Slide active>
              <Icon>
                <Paw/>
              </Icon>
              <Text s='t5' c='titleActive'><Trans>Member in:</Trans></Text>
              <Text s='t4' semibold c='titleActive'><Trans>{member_in_initiatives} initiatives</Trans></Text>
            </Slide>
          </SlideWrapper>
          <SlideWrapper>
            <Slide>
              <Icon>
                <Tasks/>
              </Icon>
              <Text s='t5' c='titleActive'><Trans>Completed:</Trans></Text>
              <Text s='t4' semibold c='titleActive'><Trans>{completed_tasks} tasks</Trans></Text>
            </Slide>
          </SlideWrapper>
          <SlideWrapper>
            <Slide>
              <Icon>
                <Gift/>
              </Icon>
              <Text s='t5' c='titleActive'><Trans>Invested:</Trans></Text>
              <Text s='t4' semibold c='titleActive'><Trans>{donated_money} units</Trans></Text>
            </Slide>
            <Slide>
              <Icon>
                <Lightning/>
              </Icon>
              <Text s='t5' c='titleActive'><Trans>Initiated:</Trans></Text>
              <Text s='t4' semibold c='titleActive'><Trans>{initiatied_count} initiatives</Trans></Text>
            </Slide>
            <Slide>
              <Icon white>
                <Org style={{transform:'scale(1.4)'}}/>
              </Icon>
              <Text s='t5' c='titleActive'><Trans>Member in:</Trans></Text>
              <Text s='t4' semibold c='titleActive'><Trans>{org_count} org&apos;s</Trans></Text>
            </Slide>
          </SlideWrapper>
 
        </SwipeableViews>
        <Pagination dots={3} index={index} onChangeIndex={onChangeIndex} />
        <Title bold s='h5' mt='1rem' ml='2rem'>{t`Participant of initiatives:`}</Title>
        <InitiativeList>
          {userInfo.initiative_members.map((m,key)=><ListRow key={key} data={{...m.initiative, type:'initiative'}} onClick={
            ()=>{        
              setFocus(m.initiative.geometry.coordinates)
              setViewport({
                longitude: m.initiative.geometry.coordinates[0],
                latitude: m.initiative.geometry.coordinates[1],
                zoom: 16,
                viewportChangeMethod: 'easeTo'
              })
              setSelected({
                id: m.initiative.id,
                type: 'Feature',
                source: 'initiative',
                geometry: m.initiative.geometry,
                properties: {
                  name: m.initiative.name||'',
                  image: m.initiative.image||'',
                  description:'',
                  created_at: m.initiative.created_at,
                  id: m.initiative.id,
                  modified_at: '',
                  address: '',
                  type: 'initiative'
                }
              })
              setSlideIndex(0)
              router.push('/', `/`, { locale: router.locale })
            }
          }/>)}
        </InitiativeList>
        <Button t='subtle' m='2rem' mt='1rem' mb='3rem' s='small' >
            <Trans>Show all initiatives</Trans>
        </Button>
      </InitiativeSection>
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
    </Content>
  </Container>
}

function Pagination({dots=3, index=0, onChangeIndex=(v:number)=>{return} }) {

  return <Dots>
    {[...Array(3)].map((v,i)=><Dot key={i} active={i===index} onClick={()=>onChangeIndex(i)}/>)}
  </Dots>
}