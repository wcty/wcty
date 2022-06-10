import { t, Trans } from '@lingui/macro'
import { Title, Text, SectionTab, Search } from '@ui'
import { FieldWrapper, SearchInput } from 'containers/FloatPanel/styles'
import { Container } from 'containers/Initiative/styles'
import { MembersPageQuery } from 'generated'
import { useRouter } from 'next/router'
import { ButtonBack, Header, Toolbox, Grid, Tile, UserAvatar } from './styles'
import { ReactComponent as SearchIcon } from '@assets/icons/search.svg'
import { ReactComponent as CancelIcon } from '@assets/icons/cancel.svg'
import { useEffect, useState } from 'react'
import { ReactComponent as WecityText } from '@assets/icons/wecity-text.svg'
import { useRecoilState } from 'recoil'
import Sidebar from "containers/Sidepanel";
import { useLayout } from 'common'
import User from '@assets/icons/user.png'


export default function Members({data}:{data:MembersPageQuery}){
  const router = useRouter()
  const { id } = router.query
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
  //keyword: `%${keyword}%`

  const getRoles = (m: MembersPageQuery['members'][number])=>{
    const roles = []
    
    if(data.initiator?.[0].id===m.id){
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

  function onTab(label:string){
    setSelected(
      selected.includes(label) ?
      selected.filter(s=>s!==label) :
      [...selected, label]
    )
  }

  function filter(m: MembersPageQuery['members'][number]){
    if(selected.length===0){
      return true
    }
    let criterium = false;
    if(data.initiator?.[0].id===m.id && selected.includes('Initiator')){
      criterium = criterium || true
    }
    if(m?.volunteers_aggregate?.aggregate?.count && selected.includes('Volunteer')){
      criterium = criterium || true
    }
    if(m?.donations_aggregate?.aggregate?.count && selected.includes('Donor')){
      criterium = criterium || true
    }
    return criterium
  }

  return  <Container>
    <div style={{position:'absolute', top:'5rem', left: '-140px', transform:'scale(1.5)'}}><WecityText/></div>
    <Header>
      <ButtonBack onClick={()=>{
        router.push({
          pathname: `/initiative/[id]`, 
          query: { id }
        }, 
        `/initiative/${id}`, 
        { locale: router.locale }
      ).then(()=>setVisible(true))
      }}/>
      <div>
        <Title s='h3' mb='3px'><Trans>Members:</Trans> {data.members.length}</Title>
        <Text s='t4' mb='1rem' c='label' style={{textAlign:'start'}}>{data?.initiative?.name}</Text>
      </div>
    </Header>
    <Toolbox>
      <div>
        <SectionTab label={t`Initiator`} active={selected.includes('Initiator')} onClick={()=>onTab('Initiator')}/>
        <SectionTab label={t`Volunteer`} active={selected.includes('Volunteer')} onClick={()=>onTab('Volunteer')}/>
        <SectionTab label={t`Donor`} active={selected.includes('Donor')} onClick={()=>onTab('Donor')}/>
        <SectionTab label={t`Contractor`} active={selected.includes('Contractor')} onClick={()=>onTab('Contractor')}/>
      </div>
      <div className='search'>
        <FieldWrapper>
          <SearchInput style={{boxShadow:'none'}}
            type='text' 
            value={keyword} 
            onChange={(e)=>setKeyword(e.target.value)} 
            placeholder={t`Search`}/>
          <div><SearchIcon/></div>
          <div><button onClick={()=>setKeyword('')}><CancelIcon/></button></div>
        </FieldWrapper>
      </div>
    </Toolbox>
    <Grid>
      {data.members
        .filter(
          v=>v.user?.display_name?.toUpperCase()
            .includes(keyword.toUpperCase()))
        .filter(filter)
        .map((m, key)=>
        <Tile key={key} onClick={()=>{
          router.push({
              pathname: `/initiative/[id]/members/[user_id]`, 
              query: { id, user_id: m.user?.id }
            }, 
            `/initiative/${id}/members/${m.user?.id}`, 
            { locale: router.locale }
          )
        }}>  
          <UserAvatar src={m.user?.avatar_url||User.src} alt={m.user?.display_name||''}/>
          <div style={{justifyContent:'center'}}>
            <Text semibold s='t2'>{m.user?.display_name}</Text>
            <Text s='t4' c='label'>{getRoles(m)}</Text>
          </div>
        </Tile>
      )}
    </Grid>
  </Container>
}