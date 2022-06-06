import { Title, Text, IconButton } from '@ui'
import { CloseIcon, Grid, ImageThumb, LibraryTiles } from 'components/Gallery/styles'
import { ChatFeedSubscription, ChatFilesQuery, ChatsQuery, File_Types_Enum } from 'generated'
import SimpleBar from 'simplebar-react';
import { useLayout, useSize } from "@ui/common";
import 'simplebar/dist/simplebar.min.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ReactComponent as Initiative } from '@assets/icons/initiative.svg'
import { ChatWrapper, ChatsWrapper, ChatList, ChatContainer, ChatListHeading } from './styles';
import { ReactComponent as SearchIcon } from '@assets/icons/search.svg'
import { FieldWrapper, SearchInput } from 'containers/FloatPanel/styles'
import { ReactComponent as CancelIcon } from '@assets/icons/cancel.svg'
import { t, Trans } from '@lingui/macro';
import { useUser } from 'common';

export default function Chat({chatList, feed, chatFiles}:{chatList:ChatsQuery, feed?:ChatFeedSubscription, chatFiles?: ChatFilesQuery}){

  // console.log(chatList, feed)
  const [keyword, setKeyword] = useState('')

  const user = useUser()
  const { height, ref } = useSize();
  const [index, setIndex] = useState(0)
  const layout = useLayout()
  const images = chatFiles?.files?.filter(f=>f.type===File_Types_Enum.Image)||[]
  function onChangeIndex(i:number){
    if(i>=0 && i<=images.length-1){
      setIndex(i)
    }
  }
  const router = useRouter()
  const { id, chat_id } = router.query

  const members = chatList?.initiative_chats.find(c=>String(c.id)===chat_id)?.members.filter(member=>member?.user?.id!==user?.id)

  return <ChatsWrapper>
    <ChatList>
      <ChatListHeading>
        <Title s='h4' m='0.5rem 0'><Trans>Messages</Trans></Title>
        <Text s='t5' c='label'>{chatList?.initiative?.name}</Text>
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
    </ChatList>
    <ChatContainer>
      <ChatListHeading>
        <Title s='h4' m='0.5rem 0'><Trans>{members?.[0].user.display_name}</Trans></Title>
        <br/>
      </ChatListHeading>
      <ChatWrapper>
        
      </ChatWrapper>
    </ChatContainer>
    <LibraryTiles {...{ref}}>
        <Title s='h3' 
          position="absolute" 
          top={layout==='desktop'?'0.8rem':'0rem'}>Photos</Title>
        {layout==='mobile' && 
          <Text 
            position="absolute" 
            top='3rem' 
            alignItems='center' 
            c='label'
            display='flex'>
              <Initiative style={{transform:'scale(0.6)', width:'22px', margin: 0, marginLeft:'-5px'}}/>
                {chatList?.initiative?.name}
          </Text>}

        <SimpleBar
          autoHide={true}
          style={{ width: '100%', boxSizing: 'border-box', maxHeight: height }}
        >
        <Grid >
          {images.map((v,key)=>
            <ImageThumb key={key} 
              onClick={()=>{
                setIndex(key) 
                //layout  === 'mobile' && onFullscreenButtonClick?.(key) 
              }}
              selected={key===index && layout==='desktop'}
              src={v.url+'?q=50&w=150'} 
              alt=""/> )}
        </Grid>
        </SimpleBar>
      </LibraryTiles>
  </ChatsWrapper>
}
