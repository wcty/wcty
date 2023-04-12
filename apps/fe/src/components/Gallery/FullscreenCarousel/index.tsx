import { Author, Button, Divider, IconButton, Title } from "@ui"
import { useLayout, useUser } from "common"
import { useEffect, useState } from "react"
import { FullscreenCarouselWrapper, CloseIcon, GalleryIcon, Image, LeftArrow, RightArrow, SwipeableViews, BottomPanel, CarouselWrapper, ImageContainer, OptionsButton, OptionsMenu, DeletionMenu, ConfigIcon } from "../styles"
import type { SlideRenderProps } from 'react-swipeable-views-utils';
import { slideRenderer } from "./slideRenderer"
import { ReactComponent as Initiative } from '@assets/icons/initiative.svg'
import { Trans } from "@lingui/macro";
import { useRouter } from "next/router";
import { GetFilesDocument, GetFilesWithStatsDocument, PostInitiativeInfoFragment, useDeleteFilesMutation, useUpdateCoverMutation } from "generated";
import { InitiativeProps } from "containers/Initiative";


export type GalleryImage = {
  url: string,
  created_at?: string,
  post_id?: string,
  user?: {
    display_name?: string | null,
    id?: number | null,
    avatar_url?: string | null,
  }
}

export function FullscreenCarousel({
  images,
  defaultIndex,
  onClose = () => { return },
  onGalleryButtonClick,
  initiative,
  withBottomPanel,
  withPostButton,
  header
}: {
  images: GalleryImage[],
  defaultIndex?: number,
  onClose: () => void,
  initiative: InitiativeProps['initiative'] | PostInitiativeInfoFragment,
  onGalleryButtonClick?: (i: number) => void,
  withBottomPanel?: boolean,
  withPostButton?: boolean,
  header?: string | null
}) {

  const [index, setIndex] = useState(defaultIndex || 0)
  const layout = useLayout()
  const router = useRouter()
  const { id } = router.query
  function onChangeIndex(i: number) {
    if (i >= 0 && i <= images.length - 1) {
      setIndex(i)
    }
  }
  const [options, setOptions] = useState(false)
  const [deletion, setDeletion] = useState(false)
  const user = useUser();
  useEffect(() => {
    setOptions(false)
    setDeletion(false)
  }, [index])
  const [update] = useUpdateCoverMutation()
  const refreshData = async () => {
    return router.replace(router.asPath);
  }
  const [deleteFiles, { error: deleteError }] = useDeleteFilesMutation()

  return (
    <FullscreenCarouselWrapper >
      {layout === 'mobile' ?
        <>
          <CarouselWrapper>
            <ImageContainer>
              <SwipeableViews
                {...{ index, onChangeIndex }}
                slideCount={images.length}
                overscanSlideAfter={2}
                overscanSlideBefore={2}
                enableMouseEvents
                slideRenderer={(v: SlideRenderProps) =>
                  slideRenderer({ ...v, entry: images[v.key] }
                  )}
              />
              <CloseIcon>
                <IconButton
                  onClick={() => onClose()}
                  icon='close'
                  t="secondary"
                  s="small" />
              </CloseIcon>
              {onGalleryButtonClick && <GalleryIcon>
                <IconButton
                  onClick={() => onGalleryButtonClick(index)}
                  icon='gallery'
                  t="secondary"
                  s="small" />
              </GalleryIcon>}
              {withPostButton && images[index].post_id &&
                <Button
                  position='absolute'
                  top={navigator.userAgent.includes('WV') ? 'calc(2rem + 29px)' : '2rem'}
                  left='2rem'
                  style={{ opacity: 0.8 }}
                  onClick={() => {
                    onClose()
                    router.push({
                      pathname: '/initiative/[id]/post/[post_id]',
                      query: { id, post_id: images[index].post_id }
                    }, `/initiative/${id}/post/${images[index].post_id}`, {
                      locale: router.locale
                    })
                  }}
                  s="small"
                  t="secondary">
                  <Trans>Go to the image&apos;s post</Trans>
                </Button>}
              {(images[index]?.url !== initiative?.image) && <>
                <ConfigIcon>
                  <IconButton
                    icon='options'
                    t="secondary"
                    s="small"
                    onClick={() => {
                      setOptions(!options)
                      setDeletion(false)
                    }} />
                </ConfigIcon>
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
                      You will not be able to restore the post after deleting it.
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
            </ImageContainer>
            {withBottomPanel && <>
              <BottomPanel>
                <Title s='h4' bold m='0.3rem 2rem' alignItems='center' >
                  <Initiative style={{ transform: 'scale(0.6)', width: '22px', margin: 0, marginLeft: '-5px' }} />
                  {header}
                </Title>
                <Divider m='0' c="titleActive" height='1px' />
                <Author
                  p='0px 2rem'
                  flex='1 1 auto'
                  alignItems='center'
                  onClick={
                    () => router.push({
                      pathname: `/initiative/[id]/members/[user_id]`,
                      query: { id, user_id: images[index]?.user?.id }
                    },
                      `/initiative/${id}/members/${images[index]?.user?.id}`,
                      { locale: router.locale }
                    )
                  }
                  name={images[index]?.user?.display_name || ''}
                  picture={images[index]?.user?.avatar_url || ''}
                  date={
                    images?.[index]?.created_at ?
                      new Date(images[index].created_at!) :
                      undefined}
                />
              </BottomPanel>
            </>}
          </CarouselWrapper>
        </> :
        <>
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
          <CloseIcon>
            <IconButton
              onClick={() => onClose()}
              icon='close'
              t="secondary"
              s="small" />
          </CloseIcon>
          {onGalleryButtonClick && <GalleryIcon>
            <IconButton
              onClick={() => onGalleryButtonClick(index)}
              icon='gallery'
              t="secondary"
              s="small" />
          </GalleryIcon>}
          {(images[index]?.url !== initiative?.image) && <>
            <ConfigIcon>
              <IconButton
                icon='options'
                t="secondary"
                s="small"
                onClick={() => {
                  setOptions(!options)
                  setDeletion(false)
                }} />
            </ConfigIcon>
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
                  You will not be able to restore the post after deleting it.
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
        </>}
    </FullscreenCarouselWrapper>
  )
}