import {
  useAddress,
  useGeolocation,
  useLang,
  useLayout,
  useUser,
} from 'common';
import {
  Header,
  Icon,
  MetricsRow,
  ShareJoin,
  Stats,
  Member,
  MembersContainer,
  MenuSection,
  MenuButton,
} from './styles';

import { format } from 'd3-format';
import { DateTime, DateTimeFormatOptions } from 'luxon';
import distance from '@turf/distance';
import { useRouter } from 'next/router';
import { Button } from '@ui';
import { InitiativeProps } from '..';
import {
  InitiativeByPkDocument,
  MembersPreviewFragment,
  useDeleteInitiativeMemberMutation,
  useDeleteInitiativeMutation,
  useInitiativeByPkQuery,
} from 'generated';
import { t, Trans } from '@lingui/macro';
import { ReactComponent as People } from '@assets/icons/popupPeople.svg';
import { ReactComponent as Location } from '@assets/icons/popupLocation.svg';
import { ReactComponent as Time } from '@assets/icons/time.svg';
import { ReactComponent as Distance } from '@assets/icons/distance.svg';
import { ReactComponent as Initiative } from '@assets/icons/initiative.svg';
import { ReactComponent as Home } from '@assets/icons/home.svg';
import { ReactComponent as Mail } from '@assets/icons/mail.svg';
import { ReactComponent as Layers } from '@assets/icons/layers.svg';
import User from '@assets/icons/user.png';
import { OptionsButton } from 'components/Post/styles';

const formatMeters = format(',.2r');

function copyToClipboard(text: string) {
  window.prompt('Copy to clipboard: Ctrl+C, Enter', text);
}

function PeopleLocation({
  count,
  distance,
  members,
}: {
  count: number;
  distance?: number;
  members: MembersPreviewFragment[];
}) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div>
        <Icon>
          <People />
        </Icon>
        {count}
      </div>
      <MembersContainer
        onClick={() => {
          router.push(
            {
              pathname: `/initiative/[id]/members`,
              query: { id },
            },
            `/initiative/${id}/members`,
            { locale: router.locale }
          );
        }}
      >
        {members.map((m, key) => (
          <Member
            referrerPolicy="no-referrer"
            onError={(e: any) => {
              e.target.src = User.src;
            }}
            src={m.user?.avatar_url || ''}
            key={key}
          />
        ))}
        <OptionsButton
          style={{ position: 'sticky', marginLeft: '-7px' }}
          t="secondary"
          s="small"
        />
      </MembersContainer>
      {distance && (
        <div>
          <Icon>
            <Distance />
          </Icon>
          {distance < 1000
            ? formatMeters(distance) + t`m from me`
            : formatMeters(distance / 1000) + t`km from me`}
        </div>
      )}
    </>
  );
}

function Buttons({ isMember = false, isOnlyMember = false, id = '' }) {
  const router = useRouter();
  const user = useUser();
  const [deleteInitiative] = useDeleteInitiativeMutation({
    variables: { id: router.query.id },
  });
  const [leaveInitiative] = useDeleteInitiativeMemberMutation({
    variables: {
      initiative_id: router.query.id,
      user_id: user?.id,
    },
    refetchQueries: [InitiativeByPkDocument],
  });

  return (
    <ShareJoin>
      <Button
        onClick={() => copyToClipboard(window.location.href)}
        t="outlined"
      >
        <Trans>Share</Trans>
      </Button>
      {!isMember && (
        <Button>
          <Trans>Join</Trans>
        </Button>
      )}
      {isOnlyMember ? (
        <Button
          onClick={async () => {
            await deleteInitiative();
            router.push('/');
          }}
        >
          <Trans>Delete initiative</Trans>
        </Button>
      ) : (
        <>
          {isMember && (
            <Button
              onClick={async () => {
                await leaveInitiative();
                router.push('/');
              }}
            >
              <Trans>Leave initiative</Trans>
            </Button>
          )}
        </>
      )}
    </ShareJoin>
  );
}

export default function HeaderComponent({ initiative }: InitiativeProps) {
  const layout = useLayout();
  const router = useRouter();
  const { id } = router.query;
  const user = useUser();

  const loc = useGeolocation();
  const dist =
    (initiative &&
      loc &&
      distance(
        initiative?.geometry?.coordinates,
        [loc.longitude, loc.latitude],
        { units: 'meters' }
      )) ||
    undefined;
  const address = useAddress(initiative?.geometry.coordinates);
  const lang = useLang();

  const f: DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  const dt = DateTime.fromISO(initiative?.created_at)
    .setLocale(lang)
    .toLocaleString(f);

  const { data } = useInitiativeByPkQuery({
    variables: { id, user_id: user?.id },
    fetchPolicy: 'cache-first',
  });
  const isMember = !!data?.initiative?.isMember?.length;
  const isOnlyMember =
    data?.initiative?.members_aggregate?.aggregate?.count === 1 && isMember;


  return (
    <>
      {layout === 'desktop' ? (
        <Stats>
          <PeopleLocation
            members={data?.initiative?.members || []}
            count={initiative?.members_aggregate.aggregate?.count || 1}
            distance={dist}
          />
          <div>
            <Icon>
              <Location />
            </Icon>
            {address}
          </div>
          <div>
            <Icon>
              <Time />
            </Icon>
            <Trans>Initiative created at</Trans> {' ' + dt}
          </div>
        </Stats>
      ) : (
        <MetricsRow>
          <PeopleLocation
            members={data?.initiative?.members || []}
            count={initiative?.members_aggregate.aggregate?.count || 1}
            distance={dist}
          />
        </MetricsRow>
      )}
      <Header>
        {layout === 'mobile' && (
          <div>
            <Icon>
              <Location />
            </Icon>
            {address}
          </div>
        )}
        <h2>
          {layout === 'desktop' && (
            <Initiative style={{ marginRight: '1rem' }} />
          )}
          {initiative?.name}
        </h2>
        {layout === 'mobile' ? (
          <div>
            <Icon>
              <Time />
            </Icon>
            <Trans>Initiative created</Trans>
            {' ' + dt}
          </div>
        ) : (
          !isMember && <Buttons {...{ isMember, isOnlyMember }} />
        )}
        {layout === 'desktop' && isMember && (
          <Buttons {...{ isMember, isOnlyMember }} />
        )}
      </Header>
      {layout === 'mobile' && <Buttons {...{ isMember }} />}
    </>
  );
}
