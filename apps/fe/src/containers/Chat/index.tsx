import { ChatFeedSubscription, ChatFilesQuery, ChatsQuery } from 'generated'
import { ChatsWrapper } from './styles';

import PhotoLibrary from './PhotoLibrary';
import ChatField from './ChatField';
import ChatCatalog from './ChatCatalog';
import { useRouter } from 'next/router';
import { useLayout } from '@ui/common';
import { useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import Sidebar from "containers/Sidepanel";

export default function Chat({chatList, feed, chatFiles}:{chatList:ChatsQuery, feed?:ChatFeedSubscription, chatFiles?: ChatFilesQuery}){
  
  const router = useRouter()
  const { chat_id } = router.query
  const layout = useLayout();
  const [showMedia, setShowMedia] = useRecoilState(Chat.showMedia);
  const [,setVisible] = useRecoilState(Sidebar.visible)

  useEffect(()=>{
    setShowMedia(false);
  },[chat_id, setShowMedia])

  useEffect(()=>{
    if(layout==='mobile'){
      setVisible(false)
    }else{
      setVisible(true)
    }
    return ()=>setVisible(true)
  },[layout])

  return <ChatsWrapper>
    {(layout==='desktop' || !chat_id) && <ChatCatalog {...{chatList}}/>}
    {(layout==='desktop' || (!!chat_id && !showMedia)) && <ChatField {...{chatList, chatFiles, feed}}/>}
    {(layout==='desktop' || (!!chat_id && showMedia)) && <PhotoLibrary {...{chatList, chatFiles}}/>}
  </ChatsWrapper>
}

Chat.showMedia = atom({
  key: 'chat.showMedia',
  default: false
})