import { Avatar, Text, TextArea, Button, IconButton, Loader } from "@ui";
import { EditorContainer, EditorHeader, EditorWrapper, Names } from "./styles";
import { File_Types_Enum, GetFilesDocument, PostFragment, useCreatePostMutation, useDeleteFilesMutation, useUpdatePostMutation } from "generated";
import { fixAvatar, useUploader, useUser } from "common";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import { InitiativeProps } from "containers/Initiative";
import { IEmojiData } from "emoji-picker-react";
import { Trans } from "@lingui/macro";


export default function PostEditor({
  onClose = ()=>{}, 
  initiative,
  post
}: 
  InitiativeProps & {
    onClose:()=>void,
    post?: PostFragment 
  }
){
  const user = useUser();
  const { id } = useRouter().query;
  const [message, setMessage] = useState(post?.message || '')
  const [emojiOpen, setEmojiOpen] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement|any>();
  const [loading, setLoading] = useState(false)

  const onEmojiClick = (event: React.MouseEvent, emojiObject: IEmojiData) => {
    const cursor = inputRef?.current?.selectionStart;
    const text =
      message.slice(0, cursor) + emojiObject.emoji + message.slice(cursor);
      setMessage(text);
  };

  const {onInputChange, filesData, submit } = useUploader(initiative?.id)

  const [addPost, { error }] = useCreatePostMutation()
  const [deletionFiles, setDeletionFiles] = useState<string[]>([])
  const uploadedImages = useMemo(
    ()=>post?.files
      .filter(f=>f.type === File_Types_Enum.Image)
      .filter(f=>!deletionFiles.includes(f.id)),
  [post, deletionFiles])

  const [deleteFiles, { error:deleteError }] = useDeleteFilesMutation()
  const [updatePost, { error:updateError }] = useUpdatePostMutation()
  
  // console.log(deleteError, updateError)
  useEffect(()=>{
    if(error && deleteError && updateError){
      console.log(error, deleteError, updateError)
      setLoading(false)
    }
  },[error, deleteError, updateError])
  
  const submitPost = async ()=>{ 
    if(post){
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
          postId: post.id,
          multiple: true,
          keepSelected: true
        })
      }
      await updatePost({
        variables:{
          message,
          post_id: post.id,
          now: new Date()
        },
        refetchQueries: [ GetFilesDocument ]
      })
      setMessage(''); 
      onClose() 
    }else{
      setLoading(true)
      const results = await submit({
        createRecord: false,
        multiple: true
      })

      await addPost({
        variables:{
          initiative_id:id, 
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
      onClose() 
    }
  }

  useEffect(()=>{
    window.onkeydown = (e)=>{
      if(e.key === 'Enter' && (e.ctrlKey || e.metaKey) && message?.length >= 2){
        submitPost()
      }
    }
    return ()=>{
      window.onkeydown = null
    }
  },[message])

  return (
    <EditorWrapper>
      <EditorContainer>
        <EditorHeader>
          <div>
            <Avatar picture={
              fixAvatar(user?.avatar_url)
            }/>
            <Names>
              <Text semibold>
                {user?.display_name}
              </Text>
              <Text customColor='label'>
                {initiative?.name||''}
              </Text>
            </Names>
          </div>
          <IconButton customSize="small" position='absolute' top='2rem' right='2rem' customType="secondary" icon="close" onClick={onClose}/>
        </EditorHeader>
        <TextArea 
          disabled={loading}
          onClick={()=>setEmojiOpen(false)} 
          {...{inputRef, onEmojiClick}} 
          {...{emojiOpen, setEmojiOpen}} 
          {...{uploadedImages}}
          onImageSubmit={(e,o)=>onInputChange(e,{ ...o, keepSelected: true })}
          withImage 
          withEmoji 
          value={message} 
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
          }}
          onChange={(e:any)=>setMessage(e.target.value)}/>
        <Button 
          disabled={loading} 
          mt='1rem' pr="3rem" pl="3rem" 
          customSize="large" 
          onClick={submitPost} 
          aria-disabled={message.length<2}>
            {post? 
              <Trans>Update</Trans>:
              <Trans>Publish</Trans>}
        </Button>
      </EditorContainer>
      {loading && <Loader center/>}
    </EditorWrapper>
  )
}