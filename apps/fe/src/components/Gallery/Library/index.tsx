import { Author, Button, IconButton, Title, Text } from "@ui"
import { useLayout, useUser } from "common"
import { useEffect, useState } from "react"
import { BottomPanel, CarouselWrapper, CloseIcon, DeletionMenu, FullscreenIcon, Grid, Image, ImageContainer, ImageThumb, LeftArrow, LibraryTiles, LibraryWrapper, OptionsButton, OptionsMenu, RightArrow } from "../styles"
import type { SlideRenderProps } from 'react-swipeable-views-utils';
import { slideRenderer } from "./slideRenderer"
import { GalleryImage } from "..";
import SimpleBar from 'simplebar-react';
import { useSize } from "@ui/common";
import 'simplebar/dist/simplebar.min.css';
import { ReactComponent as Initiative } from '@assets/icons/initiative.svg'
import { Trans } from "@lingui/macro";
import { atom } from "recoil";
import { useRouter } from "next/router";
import { InitiativeProps } from "containers/Initiative";
import { GetFilesDocument, GetFilesWithStatsDocument, useDeleteFilesMutation, useUpdateCoverMutation } from "generated";


export function Library({
  images,
  defaultIndex,
  header,
  initiative,
  onClose = () => { return },
  onFullscreenButtonClick
}: {
  images: GalleryImage[],
  defaultIndex?: number,
  header?: string | null,
  initiative: InitiativeProps['initiative'],
  onClose: () => void,
  onFullscreenButtonClick?: (i: number) => void
}) {

  const [index, setIndex] = useState(defaultIndex || 0)
  const layout = useLayout()
  function onChangeIndex(i: number) {
    if (i >= 0 && i <= images.length - 1) {
      setIndex(i)
    }
  }


  const router = useRouter()
  const { id } = router.query
  const [options, setOptions] = useState(false)
  const [deletion, setDeletion] = useState(false)
  const user = useUser();
  useEffect(() => {
    setOptions(false)
    setDeletion(false)
  }, [index])
  const { height, ref } = useSize();
  const [update] = useUpdateCoverMutation()
  const refreshData = async () => {
    return router.replace(router.asPath);
  }
  const [deleteFiles, { error: deleteError }] = useDeleteFilesMutation()

  return (
    <LibraryWrapper>
      {layout === 'desktop' &&
        <CarouselWrapper>
          <ImageContainer>
            <Image src={images[index].url} />
            <LeftArrow>
              <IconButton
                onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
                icon='arrow-left' />
            </LeftArrow>
            <RightArrow>
              <IconButton
                onClick={() => setIndex(index === images.length - 1 ? 0 : index + 1)}
                icon='arrow-right' />
            </RightArrow>

            {onFullscreenButtonClick &&
              <FullscreenIcon>
                <IconButton
                  onClick={() => onFullscreenButtonClick(index)}
                  icon='fullscreen'
                  t="secondary"
                  s="small" />
              </FullscreenIcon>}
          </ImageContainer>
          <BottomPanel>
            <div>
              <Author
                p='0px 2rem'
                name={images[index]?.user?.display_name || ''}
                picture={images[index]?.user?.avatar_url || ''}
                onClick={
                  () => router.push({
                    pathname: `/initiative/[id]/members/[user_id]`,
                    query: { id, user_id: images[index]?.user?.id }
                  },
                    `/initiative/${id}/members/${images[index]?.user?.id}`,
                    { locale: router.locale }
                  )
                }
                date={
                  images?.[index]?.created_at ?
                    new Date(images[index].created_at!) :
                    undefined}
              />
              <Title s='h4'><Initiative />{header}</Title>
            </div>
            <div css={`position: relative; `}>
              <div css={`height: 3rem; position: relative;`} />

              {user?.id && (images[index]?.url !== initiative?.image) && <>
                <OptionsButton
                  t='secondary'
                  css={`width: 28px; height: 28px;`}
                  onClick={() => {
                    setOptions(!options)
                    setDeletion(false)
                  }}
                  s='small' />

                {options &&
                  <OptionsMenu >
                    {images[index]?.url !== initiative?.image && <Button
                      style={{ pointerEvents: 'all' }}
                      onClick={async () => {
                        console.log('click');
                        try {
                          await update({ variables: { id: initiative?.id, data: { image: images[index]?.url } } })
                          await refreshData()
                          setOptions(false);
                        } catch (err) {
                          console.log('Can\'t update', err)
                        }
                      }}
                      width='100%'
                      t='secondary'>
                      <Trans>Set as cover</Trans>
                    </Button>}
                    {images[index]?.post_id && <Button
                      style={{ pointerEvents: 'all' }}
                      onClick={() => {
                        onClose()
                        router.push({
                          pathname: '/initiative/[id]/post/[post_id]',
                          query: { id, post_id: images[index].post_id }
                        }, `/initiative/${id}/post/${images[index].post_id}`, {
                          locale: router.locale
                        })
                      }}
                      width='100%'
                      t='secondary'>
                      <Trans>Go to post</Trans>
                    </Button>}
                    {!images[index]?.post_id && images[index]?.url !== initiative?.image && images?.length > 1 && <Button
                      style={{ pointerEvents: 'all' }}
                      onClick={async () => {
                        setDeletion(true)
                        setOptions(false);
                      }}
                      width='100%'
                      t='secondary'>
                      <Trans>Delete</Trans>
                    </Button>}
                  </OptionsMenu>}
                {deletion &&
                  <DeletionMenu>
                    <span>
                      You will not be able to restore the image after deleting it.
                      Are you sure you want to proceed?
                    </span>
                    <div>
                      <Button
                        style={{ pointerEvents: 'all' }}
                        onClick={async () => {
                          try {
                            await deleteFiles({
                              variables: { where: { downloadable_url: { _eq: images[index].url } } },
                              refetchQueries: [GetFilesDocument, GetFilesWithStatsDocument]
                            })
                            setIndex(images?.length === 1 ? 0 : index !== 0 ? index - 1 : index + 1)
                            await refreshData()
                          } catch (err) {
                            console.log('Error deleting file', err)
                          }
                          setOptions(false);
                          setDeletion(false);
                        }}
                        width='100%'
                        t='primary'>
                        <Trans>Delete</Trans>
                      </Button>
                      <Button
                        style={{ pointerEvents: 'all' }}
                        onClick={() => {
                          setOptions(false);
                          setDeletion(false);
                        }}
                        width='100%'
                        t='outlined'>
                        <Trans>Return</Trans>
                      </Button>
                    </div>
                  </DeletionMenu>}
              </>}
            </div>
          </BottomPanel>

        </CarouselWrapper>}
      <LibraryTiles {...{ ref }}>
        <Title s='h3'
          position="absolute"
          top={
            layout === 'desktop' ?
              '0.8rem' :
              navigator.userAgent.includes('WV') ?
                '29px' :
                '0rem'
          }>Photos</Title>
        {layout === 'mobile' &&
          <Text
            position="absolute"
            top={navigator.userAgent.includes('WV') ? 'calc(3rem + 29px)' : '3rem'}
            alignItems='center'
            c='label'
            display='flex'>
            <Initiative style={{ transform: 'scale(0.6)', width: '22px', margin: 0, marginLeft: '-5px' }} />{header}
          </Text>}
        <CloseIcon>
          <IconButton
            onClick={() => onClose()}
            icon='close'
            t="secondary"
            s="small" />
        </CloseIcon>
        <SimpleBar
          autoHide={true}
          style={{ width: '100%', boxSizing: 'border-box', maxHeight: height }}
        >
          <Grid >
            {images.map((v, key) =>
              <ImageThumb key={key}
                onClick={() => {
                  setIndex(key)
                  layout === 'mobile' && onFullscreenButtonClick?.(key)
                }}
                selected={key === index && layout === 'desktop'}
                src={v.url + '?q=50&w=150'}
                alt="" />)}
          </Grid>
        </SimpleBar>
      </LibraryTiles>
    </LibraryWrapper>
  )
}

