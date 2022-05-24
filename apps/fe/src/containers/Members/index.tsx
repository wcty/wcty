import { t, Trans } from '@lingui/macro'
import { Title, Text, SectionTab, Search } from '@ui'
import { FieldWrapper, SearchInput } from 'containers/FloatPanel/styles'
import { Container } from 'containers/Initiative/styles'
import { MembersPageQuery } from 'generated'
import { useRouter } from 'next/router'
import { ButtonBack, Header, Toolbox, Grid, Tile } from './styles'
import { ReactComponent as SearchIcon } from '@assets/icons/search.svg'
import { ReactComponent as CancelIcon } from '@assets/icons/cancel.svg'
import { useState } from 'react'
import { ReactComponent as WecityText } from '@assets/icons/wecity-text.svg'

export default function Members({data}:{data:MembersPageQuery}){
  const router = useRouter()
  const { id } = router.query
  const [keyword, setKeyword] = useState('')
  const [selected, setSelected] = useState<string[]>([])

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
    if(m?.donations_aggregate?.aggregate?.count && selected.includes('Donator')){
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
      )
      }}/>
      <div>
        <Title h='h3' mb='3px'><Trans>Members:</Trans> {data.members.length}</Title>
        <Text customSize='t4' mb='1rem' customColor='label' style={{textAlign:'start'}}>{data?.initiative?.name}</Text>
      </div>
    </Header>
    <Toolbox>
      <div>
        <SectionTab label={t`Initiator`} active={selected.includes('Initiator')} onClick={()=>onTab('Initiator')}/>
        <SectionTab label={t`Volunteer`} active={selected.includes('Volunteer')} onClick={()=>onTab('Volunteer')}/>
        <SectionTab label={t`Donator`} active={selected.includes('Donator')} onClick={()=>onTab('Donator')}/>
        <SectionTab label={t`Contractor`} active={selected.includes('Contractor')} onClick={()=>onTab('Contractor')}/>
      </div>
      <div style={{width:'310px'}}>
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
        <Tile {...{key}}>
          <img src={m.user?.avatar_url||''} alt={m.user?.display_name||''}/>
          <div style={{justifyContent:'center'}}>
            <Text semibold customSize='t2'>{m.user?.display_name}</Text>
            <Text customSize='t4' customColor='label'>{getRoles(m)}</Text>
          </div>
        </Tile>
      )}
    </Grid>
  </Container>
}