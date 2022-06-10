import { Title, Text } from '@ui'
import { ChatFeedSubscription, ChatFilesQuery, ChatsQuery } from 'generated'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { useRouter } from 'next/router';
import { ChatListHeading } from '../styles';
import { ChatWrapper, ChatContainer, EditorContainer, MessageContainer, UserMessageContainer, MessageWrapper, MessagesContainer, TimeStamp } from './styles'
import { t, Trans } from '@lingui/macro';
import { useLang, useSize, useUser } from 'common';
import MessageEditor from 'components/MessageEditor';
import { DateTime, DateTimeFormatOptions } from 'luxon'

export default function ChatField({chatList, feed, chatFiles}:{chatList:ChatsQuery, feed?:ChatFeedSubscription, chatFiles?: ChatFilesQuery}){

  const user = useUser()
  const router = useRouter()
  const { chat_id } = router.query
  const lang = useLang()  
  const { height, ref } = useSize();

  const members = chatList?.initiative_chats.find(c=>String(c.id)===chat_id)?.members.filter(member=>member?.user?.id!==user?.id)

  return <>
    <ChatContainer>
      <ChatListHeading>
        <Title s='h4' m='0.5rem 0'><Trans>{members?.[0].user.display_name}</Trans></Title>
        <br/>
      </ChatListHeading>
      <ChatWrapper>
        
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
      </ChatWrapper>
    </ChatContainer>
  </>
}
