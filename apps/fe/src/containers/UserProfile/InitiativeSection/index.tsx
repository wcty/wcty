import { t, Trans } from '@lingui/macro'
import { Title, Text, Button } from '@ui'
import { UserInfoFragment, MemberInfoFragment } from 'generated'
import { useRouter } from 'next/router'
import { Dot, Dots, Icon, InitiativeList, InitiativeSection, Slide, SlideWrapper, SwipeableViews  } from './styles'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import Sidebar from "containers/Sidepanel";
import { atoms, useLayout } from 'common'
import { ReactComponent as Paw } from '@assets/icons/paw.svg'
import { ReactComponent as Tasks } from '@assets/icons/tasks.svg'
import { ReactComponent as Gift } from '@assets/icons/gift.svg'
import { ReactComponent as Lightning } from '@assets/icons/lightning.svg'
import ListRow from 'components/ListRow'
import Slides from 'containers/Slides'


export default function UserProfile({userInfo, memberInfo}:{userInfo:UserInfoFragment, memberInfo?: MemberInfoFragment}) {
  const router = useRouter()
  const { id, user_id } = router.query
  const layout = useLayout()
  const [index, onChangeIndex] = useState(0)

  const [focus, setFocus] = useRecoilState(atoms.focalPoint)
  const [slideIndex, setSlideIndex] = useRecoilState(Slides.index)
  const [viewport, setViewport] = useRecoilState(atoms.viewport)
  const [selected, setSelected] = useRecoilState(atoms.selected)
  const [,setVisible] = useRecoilState(Sidebar.visible)

  const member_in_initiatives = userInfo.initiatives_total.aggregate?.count
  const completed_tasks = userInfo.tasks_completed.aggregate?.count
  const donated_money = userInfo.donated_total.aggregate?.sum?.amount
  const initiatied_count = userInfo.initiated_count.aggregate?.count


  return  <>
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
            router.push('/', `/`, { locale: router.locale }).then(()=>setVisible(true))

          }
        }/>)}
      </InitiativeList>
      <Button t='subtle' m='2rem' mt='1rem' mb='3rem' s='small' >
          <Trans>Show all initiatives</Trans>
      </Button>
    </InitiativeSection>
  </>
}

function Pagination({dots=3, index=0, onChangeIndex=(v:number)=>{return} }) {

  return <Dots>
    {[...Array(3)].map((v,i)=><Dot key={i} active={i===index} onClick={()=>onChangeIndex(i)}/>)}
  </Dots>
}