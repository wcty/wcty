import Information from './Information';
import { Images } from './Images';
import { InitiativePublicByPkQuery, useInitiativeByPkQuery } from 'generated';
import { Button, Text } from '@ui';
import { Trans } from '@lingui/macro';
import { ReactComponent as EditPen } from '@assets/icons/edit-pen.svg'
import { ReactComponent as ArrowDown } from '@assets/icons/arrow-drop-down.svg'
import { MobileOnly, mobile, useUser } from 'common';
import { css } from 'styled-components';
import InformationEditor from './InformationEditor'
import { useState } from 'react';

export default function InitiativeDetails(props: {
  initiative?: InitiativePublicByPkQuery['initiative'];
}) {
  const [editor, setEditor] = useState(false)
  const user = useUser();
  const { data } = useInitiativeByPkQuery({
    variables: { id: props.initiative?.id, user_id: user?.id },
    fetchPolicy: 'cache-first',
  });
  const isMember = !!data?.initiative?.isMember?.length;

  return (
    <>
      <MobileOnly>
        <div css={`border-bottom: 1px solid #000000; margin: 1rem 0; padding: 1rem 2rem; justify-content: space-between; display: flex; align-items: center;`}>
          <Text semibold><Trans>Description of initiative</Trans></Text>
          <ArrowDown />
        </div>
      </MobileOnly>
      {user && isMember && <Button
        t="secondary"
        s='small'
        css={`
          box-shadow: 0px 0px 5px rgb(0 0 0 /10%);
          margin-bottom: -1rem;
          padding-left: 0;
          padding-right: 1rem;
          ${mobile(css`margin-left: 2rem; margin-top: 2rem;`)}
        `}
        onClick={() => setEditor(true)}
      >
        <EditPen /><Trans>Edit page</Trans>
      </Button>}
      <Information {...props} />
      <Images {...props} />
      {editor && props.initiative && <InformationEditor initiative={props.initiative} onClose={() => setEditor(false)} />}
    </>
  );
}
