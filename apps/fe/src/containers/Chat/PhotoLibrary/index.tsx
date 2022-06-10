import { Title, Text } from '@ui'
import { Grid, ImageThumb } from 'components/Gallery/styles'
import { ChatFeedSubscription, ChatFilesQuery, ChatsQuery, File_Types_Enum } from 'generated'
import SimpleBar from 'simplebar-react';
import { useLayout, useSize } from "@ui/common";
import 'simplebar/dist/simplebar.min.css';
import { useState } from 'react';
import { ReactComponent as Initiative } from '@assets/icons/initiative.svg'
import { UserAvatar } from 'containers/Members/styles';
import { useRouter } from 'next/router';
import { useLang, useUser } from 'common';
import User from '@assets/icons/user.png'
import { Library } from './styles'
import { getRoles } from '../ChatCatalog';
import { DateTime, DateTimeFormatOptions } from 'luxon';
import { ReactComponent as Media } from '@assets/icons/media.svg'

export default function PhotoLibrary({chatList, chatFiles}:{chatList:ChatsQuery, feed?:ChatFeedSubscription, chatFiles?: ChatFilesQuery}){

  const { height, ref } = useSize();
  const [index, setIndex] = useState(0)
  const layout = useLayout()
  const router = useRouter()
  const { id, chat_id } = router.query
  const user = useUser()

  const images = chatFiles?.files?.filter(f=>f.type===File_Types_Enum.Image)||[]
  const member = chatList.initiative_chats.find(v=>String(v.id)===chat_id)?.members?.find(m=>m?.user?.id !== user?.id)
  const roles = member?.initiative_member && getRoles(member?.initiative_member)
  const lang = useLang()  

  const f:DateTimeFormatOptions = {month: 'long', day: 'numeric', year:'numeric'};
  const date_created = member && DateTime
    .fromISO(member?.initiative_member?.created_at)
    .setLocale(lang)
    .toLocaleString(f)

  return <>
    <Library {...{ref}}>
      <UserAvatar style={{width:'72px', height:'72px', borderRadius:'50%', alignSelf:'center'}} src={member?.user?.avatar_url||User.src} alt={member?.user?.display_name||''}/>
      <Title s='h4' m='0.5rem 0' alignSelf='center'>{member?.user.display_name}</Title>
      <Text s='t5' alignSelf='center'>{chatList.initiative?.name}</Text>
      <Text s='t5' mt='2rem' alignSelf='center'>{roles}</Text>
      {member?.initiative_member?.initiated.aggregate?.count!==0 ?
        <Text mb='2rem' mt='-1rem' alignSelf='center' style={{textAlign:'center'}}>
          <br/>
            {member?.user.display_name} created initiative «{member?.initiative_member?.initiative.name}» 
            <br/>on {date_created}
        </Text>:
        <Text mb='2rem' mt='-1rem' alignSelf='center' style={{textAlign:'center'}}>
          <br/>
            {member?.user.display_name} joined initiative «{member?.initiative_member?.initiative.name}» 
            <br/>on {date_created}
      </Text>}

      <Title s='h5' alignSelf='center' bold><Media/>Media</Title>
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
    </Library>
  </>
}
