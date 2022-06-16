import { Title, Text, Avatar, Author } from '@ui'
import { ChatsQuery, MemberInfoFragment, MembersPageQuery, useChatLazyQuery, useUpsertChatMutation } from 'generated'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { useState } from 'react';
import { ChatListHeading } from '../styles';
import { ChatList, ChatsListContainer, AddChatButton, ChatRow, InitiativeLink } from './styles';
import { ReactComponent as SearchIcon } from '@assets/icons/search.svg'
import { FieldWrapper, SearchInput } from 'containers/FloatPanel/styles'
import { ReactComponent as CancelIcon } from '@assets/icons/cancel.svg'
import { t, Trans } from '@lingui/macro';
import { useUser } from 'common';
import User from '@assets/icons/user.png'
import { useRouter } from 'next/router';
import { ButtonBack } from 'containers/Members/styles';
import { useLayout } from '@ui/common';
import Sidebar from "containers/Sidepanel";
import { useRecoilState } from 'recoil';

export const getRoles = (m: MemberInfoFragment)=>{
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

export default function ChatCatalog({chatList}:{chatList:ChatsQuery}){

  const [keyword, setKeyword] = useState('')
  const user = useUser()
  const router = useRouter()
  const { id, chat_id } = router.query
  const layout = useLayout();

  const [getChat] = useChatLazyQuery()
  const [upsertChat] = useUpsertChatMutation()

  const navigateToChat = async (user_id:string)=>{
    const chat = await getChat({
      variables: {
        initiative_id:id, 
        member: user_id,
        me:user?.id
      }
    })
    if(chat?.data?.initiative_chats?.[0]){
      router.replace(`/initiative/${id}/chats/${chat?.data?.initiative_chats?.[0].id}`)
    }else{
      upsertChat({
        variables:{
          initiative_id:id, 
          members:[{user_id: user_id}, {user_id: user?.id}]
        }
      })
      .then(v=>
        v?.data?.insert_initiative_chats_one?.id && 
        router.replace(`/initiative/${id}/chats/${v?.data?.insert_initiative_chats_one?.id}`)
      )
    }
  }


  return <>
    <ChatList>
      <ChatListHeading>
        {layout==='mobile' && 
        <ButtonBack onClick={()=>{
          router.back()
        }}/>}
        <div style={{flex:'1 1 auto', textAlign:layout==='desktop'?'start':'center'}}>
          <Title s='h4' m='0.5rem 0' width='100%' justifyContent={layout==='desktop'?'start':'center'}><Trans>Messages</Trans></Title>
          <InitiativeLink onClick={()=>router.push(`/initiative/${id}`)}>
            <Text s='t5' c='label'>{chatList?.initiative?.name}</Text>
          </InitiativeLink>
        </div>
        {layout==='mobile' && <div style={{width:'4rem'}}/>}
      </ChatListHeading>
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
      <ChatsListContainer>
        <AddChatButton>
          <Text s='t5'><Trans>+ Send a message</Trans></Text>
        </AddChatButton>
        {chatList.initiative_chats.map((chat,i)=>{
          const member = chat?.members?.find(m=>m?.user?.id !== user?.id)
          const roles = member?.initiative_member && getRoles(member.initiative_member)
          return <ChatRow
            selected={chat_id===String(chat.id)}
            onClick={()=>member && navigateToChat(member?.user?.id)}
            key={i}>
              <Author 
                picture={member?.user?.avatar_url||User}
                name={member?.user?.display_name||''} 
                roles={[roles||'']}
              />
          </ChatRow>
        })}
      </ChatsListContainer>
    </ChatList>
  </>
}
