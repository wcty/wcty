import { Title, Text, Avatar } from '@ui'
import { ChatFeedSubscription, ChatFilesQuery, ChatsQuery } from 'generated'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { useRouter } from 'next/router';
import { ChatListHeading } from '../styles';
import { ChatWrapper, ChatContainer, EditorContainer, MessageContainer, UserMessageContainer, MessageWrapper, MessagesContainer, TimeStamp } from './styles'
import { t, Trans } from '@lingui/macro';
import { useLang, useSize } from 'common';
import MessageEditor from 'components/MessageEditor';
import { DateTime, DateTimeFormatOptions } from 'luxon'
import Chat from '..';
import { useRecoilState } from 'recoil';
import { useLayout } from '@ui/common';
import { ButtonBack } from 'containers/Members/styles';
import { useUserData } from '@nhost/nextjs';

export default function ChatField({chatList, feed, chatFiles}:{chatList:ChatsQuery, feed?:ChatFeedSubscription, chatFiles?: ChatFilesQuery}){

  const user = useUserData()
  const router = useRouter()
  const { id, chat_id } = router.query
  const lang = useLang()  
  const { height, ref } = useSize();
  const layout = useLayout();
  const members = chatList?.initiative_chats.find(c=>String(c.id)===chat_id)?.members.filter(member=>member?.user?.id!==user?.id)
  const [showMedia, setShowMedia] = useRecoilState(Chat.showMedia);

  return <>
    <ChatContainer>
      <ChatListHeading>
        {layout==='mobile' && 
        <ButtonBack onClick={()=>{
          router.replace(`/initiative/${id}/chats`, undefined, {shallow:true})
        }}/>}
        <div style={{flex:'1 1 auto', textAlign: layout==='desktop'?'start':'center'}} onClick={()=>{if(layout==='mobile') setShowMedia(true)}}>
          <Title s='h4' m='0.5rem 0' width='100%' justifyContent={layout==='desktop'?'start':'center'}>{members?.[0].user.display_name}</Title>
          {layout==='desktop' ? <br/>:
          <Text s='t4' mb='1rem' c='label' width='100%' style={{textAlign:'start'}}>{chatList?.initiative?.name}</Text>}
        </div>
        {layout==='mobile' && <Avatar onClick={()=>{if(layout==='mobile') setShowMedia(true)}} picture={members?.[0].user.avatar_url||undefined}/>}
      </ChatListHeading>
      <ChatWrapper>
        {chat_id ? <>
          <EditorContainer>
            <MessageEditor/>
          </EditorContainer>
          <MessagesContainer ref={ref}>
            <SimpleBar
              autoHide={false}
              style={{ width: '100%', boxSizing: 'border-box', maxHeight: height }}
            >
              <MessageWrapper>
                {feed?.initiative_chat_messages.map((m,i)=>{
                    const f:DateTimeFormatOptions = {hour: 'numeric', minute: 'numeric'};
                    const date = DateTime
                      .fromISO(m.created_at)
                      .setLocale(lang)
                      .toLocaleString(f)

                  return m.user.id===user?.id?
                  <UserMessageContainer key={i}>
                    <Text s='t5'>{m.message}</Text>
                    <TimeStamp>{date}</TimeStamp>
                  </UserMessageContainer>:
                  <MessageContainer key={i}>
                    <Text s='t5'>{m.message}</Text>
                    <TimeStamp>{date}</TimeStamp>
                  </MessageContainer>}
                )}
              </MessageWrapper>
            </SimpleBar>
          </MessagesContainer>
        </>:<Text s='t5' m='auto' c='label' alignSelf='center'>{t`Select a chat to start messaging`}</Text>}
      </ChatWrapper>
    </ChatContainer>
  </>
}
