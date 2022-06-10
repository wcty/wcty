import { Avatar, TextField, IconButton } from "@ui";
import { InputContent, Container } from "./styles";
import { fixAvatar, useUploader, useUser } from "common";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { GetFilesDocument, MessageFragment, useCreateMessageMutation, useDeleteFilesMutation, useUpdateMessageMutation } from "generated";
import { useRouter } from "next/router";
import type { IEmojiData } from "emoji-picker-react";
import { FullscreenCarousel, GalleryImage } from "components/Gallery";
import { useRecoilState } from "recoil";
import Sidepanel from "containers/Sidepanel";
import { PositionProps, LayoutProps, SpaceProps, FlexProps } from "styled-system";

export default function MessageEditor({ 
  chatMessage, 
  onClose, 
  noAvatar,
  ...props
}:{ 
  chatMessage?:MessageFragment, 
  onClose?:()=>void, 
  noAvatar?:boolean
} & PositionProps&LayoutProps&SpaceProps&FlexProps ){
  
  const user = useUser();
  const router = useRouter();
  const { id, chat_id } = router.query;
  const [editorOpen, setEditorOpen] = useState(false);
  const [message, setMessage] = useState(chatMessage?.message || '')
  const inputRef = useRef<HTMLInputElement|any>();
  const [loading, setLoading] = useState(false)
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState<{
    images: GalleryImage[],
    defaultIndex: number
  }>()
  
  const [_, setSidebarVisible] = useRecoilState(Sidepanel.visible)
  const [deletionFiles, setDeletionFiles] = useState<string[]>([])

  const onEmojiClick = (event: React.MouseEvent, emojiObject: IEmojiData) => {
    const cursor = inputRef?.current?.selectionStart;
    const text =
      message.slice(0, cursor) + emojiObject.emoji + message.slice(cursor);
      setMessage(text);
  };

  const {onInputChange, filesData, reset, submit } = useUploader()


  const [updateMessage, { error:updateError }] = useUpdateMessageMutation()
  const [addMessage, { error }] = useCreateMessageMutation({
    variables:{
      chat_id,
      user_id: user?.id,
      message
    }
  });
  const [deleteFiles, { error:deleteError }] = useDeleteFilesMutation()

  const submitComent = async ()=>{ 
    if(chatMessage){
      setLoading(true)
      // Here delete photos
      await deleteFiles({
        variables:{where:{id:{_in:deletionFiles}}},
        refetchQueries: [ GetFilesDocument ]
      })
      // Here update post
      if(filesData?.length){
        const results = await submit({
          createRecord: true,
          props:{
            chat_id: chatMessage?.chat_id,
            message_id: chatMessage?.id
          },
          multiple: true,
          keepSelected: true
        })
      }
      await updateMessage({
        variables:{
          message,
          chat_id: chatMessage?.chat_id,
          id: chatMessage?.id,
          now: new Date()
        },
        refetchQueries: [ GetFilesDocument ]
      })
      setMessage(''); 
      onClose?.()
      reset();
    }else{
      setLoading(true)
      const results = await submit({
        createRecord: false,
        multiple: true,
        props:{
          chat_id,
          initiative_id: id
        }
      })

      console.log('results', results)

      await addMessage({
        variables:{
          chat_id,
          user_id: user?.id, 
          message,
          files: {
            data: 
              results?.map(file=>({
                downloadable_url: file.url,
                file_path: file.path,
                user_id: user?.id,
              }))||[]
          }
        },
        refetchQueries: [ GetFilesDocument ]
      }); 

      setMessage(''); 
      reset();
    }
  }

  useEffect(()=>{
    window.onkeydown = (e)=>{
      if(e.key === 'Enter' && (e.ctrlKey || e.metaKey) && message?.length >= 2){
        addMessage()
        setMessage('')
      }
    }
    return ()=>{
      window.onkeydown = null
    }
  },[message])

  return (
      <>
      <Container {...props}>
        <InputContent> 
            {!noAvatar && <Avatar s={'small'} picture={
              fixAvatar(user?.avatar_url)
            }/>}
            <TextField
              onImageClick={()=>setEditorOpen(true)} 
              extendable
              height="1rem" 
              value={message} 
              withImage 
              withEmoji
              onClick={()=>setEmojiOpen(false)} 
              {...{inputRef, onEmojiClick}} 
              {...{emojiOpen, setEmojiOpen}} 
              commentStyle
              onChange={(e:any)=>setMessage(e.target.value)}
              onImageSubmit={(e,o)=>onInputChange(e,{ ...o, keepSelected: true })}
              images={filesData?.map(v=>v.blob)}
              deleteImage={(index, options)=>{
                const id = options?.id
                if(id){
                  setDeletionFiles([...deletionFiles, id])  
                }else{
                  const newFilesData = filesData?.filter((v, i)=>i!==index)
                  onInputChange({
                    target:{
                      files: newFilesData?.map(v=>v.file) as unknown as FileList|null
                    }
                  } as ChangeEvent<HTMLInputElement>)
                }
              }}/>
            <IconButton 
              onClick={submitComent} 
              style={{alignSelf: 'start', marginTop:'0.5rem'}} 
              icon="send" 
              s="small"/>
        </InputContent>
      </Container>
      {fullscreen && 
        <FullscreenCarousel 
          {...fullscreen} 
          onClose={()=>{
            setFullscreen(undefined)
            setSidebarVisible(true)
        }} />}
      </>
  )
}
