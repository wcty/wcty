import { Container, Grid, Img } from './styles';
import { ReactComponent as MediaIcon } from '@assets/icons/media.svg';
import { InitiativeProps } from 'containers/Initiative';
import { Trans } from '@lingui/macro';
import { File_Types_Enum, useGetFilesWithStatsQuery } from 'generated';
import { Library, FullscreenCarousel } from 'components/Gallery';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import Sidepanel from 'containers/Sidepanel';

export function Images({ initiative }: InitiativeProps) {

  const { data } = useGetFilesWithStatsQuery({
    variables: {
      where: {
        _and: [
          {
            initiative_id: {
              _eq: initiative?.id,
            },
          },
          {
            type: {
              _eq: File_Types_Enum.Image,
            },
          },
        ],
      },
    },
  });

  const [gallery, setGallery] = useState<{
    defaultIndex: number;
    mode: 'library' | 'carousel';
  }>();

  const [_, setSidepanelVisible] = useRecoilState(Sidepanel.visible);

  return data ? (
    <>
      <Container>
        <button
          onClick={() => {
            setSidepanelVisible(false);
            setGallery({
              defaultIndex: 0,
              mode: 'library',
            });
          }}
        >
          <span>
            <MediaIcon />
            <Trans>Photos</Trans>: {data?.files_aggregate.aggregate?.count || 0}
          </span>
          <span>
            <Trans>Show all</Trans>
          </span>
        </button>
        <Grid>
          {data?.files.map((v, key) => (
            <Img
              key={key}
              onClick={() => {
                setGallery({
                  defaultIndex: key,
                  mode: 'carousel',
                });
                setSidepanelVisible(false);
              }}
              src={v.downloadable_url + '?q=50&w=150'}
              alt=""
            />
          ))}
        </Grid>
      </Container>
      {gallery?.mode === 'carousel' && (
        <FullscreenCarousel
          withBottomPanel
          withPostButton
          initiative={initiative}
          onClose={() => {
            setGallery(undefined);
            setSidepanelVisible(true);
          }}
          onGalleryButtonClick={(i) => {
            setGallery({
              defaultIndex: i,
              mode: 'library',
            });
          }}
          header={initiative?.name}
          images={data?.files.map((v) => ({
            url: v.downloadable_url || '',
            user: {
              id: v.user?.id,
              avatar_url: v.user?.avatar_url,
              display_name: v.user?.display_name,
            },
            created_at: v.created_at,
            post_id: v.post_id,
            // date: v.created_at
          }))}
          defaultIndex={gallery?.defaultIndex}
        />
      )}
      {gallery?.mode === 'library' && (
        <Library
          onClose={() => {
            setGallery(undefined);
            setSidepanelVisible(true);
          }}
          initiative={initiative}
          header={initiative?.name}
          onFullscreenButtonClick={(i) => {
            setGallery({
              defaultIndex: i,
              mode: 'carousel',
            });
          }}
          images={data?.files.map((v) => ({
            url: v.downloadable_url || '',
            user: {
              id: v.user?.id,
              avatar_url: v.user?.avatar_url,
              display_name: v.user?.display_name,
            },
            created_at: v.created_at,
            post_id: v.post_id,
            // date: v.created_at
          }))}
          defaultIndex={gallery?.defaultIndex}
        />
      )}
    </>
  ) : null;
}
