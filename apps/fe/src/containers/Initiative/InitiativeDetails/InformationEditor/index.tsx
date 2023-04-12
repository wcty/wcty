import { Button, IconButton, Loader, Text, TextArea, TextField } from "@ui";
import { EditorContainer, EditorHeader, EditorWrapper } from "./styles";
import { PostInitiativeInfoFragment, useUpdateInfoMutation } from "generated";
import { useState } from "react";
import { Trans, t } from "@lingui/macro";
import { FileInput } from "containers/Creation/styles";
import { Result, useUploader } from "common";
import { ReactComponent as MediaIcon } from '@assets/icons/media.svg';
import { ReactComponent as Initiative } from '@assets/icons/initiative.svg';
import { useRouter } from 'next/router';
import { ReactComponent as EditPen } from '@assets/icons/edit-pen.svg'

export default function PostEditor({
  onClose = () => null,
  initiative
}:
  {
    onClose: () => void,
    initiative: PostInitiativeInfoFragment
  }
) {
  const [data, setData] = useState(initiative)
  const [loading, setLoading] = useState(false)
  const { onInputChange, filesData, reset, submit } = useUploader()
  const [update] = useUpdateInfoMutation()
  const router = useRouter();
  const refreshData = async () => {
    return router.replace(router.asPath);
  }
  return (
    <EditorWrapper>
      <EditorContainer css={`
        >div{
          flex: 0;
        }`}>
        <EditorHeader>
          <Text c='placeholder'>
            <Trans>Edit profile</Trans>
          </Text>
          <IconButton s="small" position='absolute' top='2rem' right='2rem' t="secondary" icon="close" onClick={onClose} />
        </EditorHeader>
        <span css={`display: flex; align-items: center; margin-bottom: 1rem;`}>
          <MediaIcon width="24px" height="24px" viewBox="0 0 18 18" />
          <Text semibold ml='1rem'><Trans>Cover image:</Trans></Text>
        </span>
        <FileInput
          disabled={loading}
          title={t`Change photo`}
          src={filesData?.[0]?.blob || data?.image as any}
          css={`min-height: 142px;`}
          icon={<EditPen height='18px' width='18px' viewBox="0 2 18 16" />}
          $onInputChange={(e) => onInputChange(e)} />
        <div css={`width: 100%; height: 1rem; flex: 0 0 2rem !important;`} />
        <span css={`display: flex; align-items: center; margin-bottom: 1rem;`}>
          <Initiative width="18px" height="18px" viewBox="0 0 24 24" />
          <Text semibold ml='1rem'><Trans>Main information:</Trans></Text>
        </span>
        <TextArea
          rows={2}
          withCancel
          persistPlaceholder
          value={data?.name || ''}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          placeholder={t`Name of your initiative`} />
        <div css={`width: 100%; height: 1rem; flex: 0 0 2rem !important;`} />
        <TextArea
          rows={6}
          withCancel
          persistPlaceholder
          value={
            (data?.infos?.[0]?.problem +
              (data?.infos?.[0]?.goal ? `. ${data?.infos?.[0]?.goal}` : '') +
              (data?.infos?.[0]?.context ? `. ${data?.infos?.[0]?.context}` : '')) || ''}
          onChange={(e) => setData({ ...data, infos: [{ problem: e.target.value }] })}
          placeholder={t`Problem or idea`} />
        <div css={`display: flex; width: 100%;margin-top: 2rem;`}>
          <Button
            css={`flex: 1 1 50%;`}
            disabled={loading}
            onClick={() => { onClose(); reset() }}
            pr="3rem" pl="3rem"
            justifyContent='center'
            s="medium" t='outlined' >
            <Trans>Cancel</Trans>
          </Button>
          <div css={`width: 1rem;`} />
          <Button
            css={`flex: 1 1 50%;`}
            disabled={loading}
            pr="3rem" pl="3rem"
            justifyContent='center'
            s="medium" onClick={async (e) => {
              try {
                console.log(filesData)
                let fileUpload: Result[] | undefined
                if (filesData?.length) {
                  fileUpload = await submit({
                    createRecord: true,
                    props: {
                      initiative_id: data.id,
                    },
                    multiple: false,
                    keepSelected: true
                  })
                }
                console.log(fileUpload)
                await update({
                  variables: {
                    initiative_id: data.id, data: {
                      name: data.name,
                      ...(fileUpload?.[0]?.url ? { image: fileUpload?.[0]?.url } : {})
                    },
                    info: { problem: data?.infos?.[0]?.problem, goal: '', context: '' }
                  }
                })

                await refreshData()
                onClose()

              } catch (err) {
                console.log(err)
              }
            }} >
            <Trans>Save</Trans>
          </Button>
        </div>
      </EditorContainer>


      {loading && <Loader center />}
    </EditorWrapper>
  )
}
