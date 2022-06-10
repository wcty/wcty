import { ChatFeedSubscription, ChatFilesQuery, ChatsQuery } from 'generated'
import { ChatsWrapper } from './styles';

import PhotoLibrary from './PhotoLibrary';
import ChatField from './ChatField';
import ChatCatalog from './ChatCatalog';

export default function Chat({chatList, feed, chatFiles}:{chatList:ChatsQuery, feed?:ChatFeedSubscription, chatFiles?: ChatFilesQuery}){

  return <ChatsWrapper>
    <ChatCatalog {...{chatList}}/>
    <ChatField {...{chatList, chatFiles, feed}}/>
    <PhotoLibrary {...{chatList, chatFiles}}/>
  </ChatsWrapper>
}
