import {  useLayout, useUser } from "common";
import { InitiativePublicByPkQuery } from "generated";
import { Block } from "./styles";
import {ReactComponent as Flag} from "assets/icons/flag.svg"
import {ReactComponent as Lightbulb} from "assets/icons/lightbulb.svg"
import {ReactComponent as BuildCircle} from "assets/icons/build_circle.svg"
import { useRouter } from "next/router";
import { InitiativeProps } from "containers/Initiative";
import { Trans } from '@lingui/macro'

export default function Information({initiative}:InitiativeProps) {
  const { id } = useRouter().query;
  const user = useUser()
  
  return initiative?.infos?.[0]? <div>
    {initiative.infos[0].problem && <Block>
      <h5><Lightbulb/><Trans>Problem or idea</Trans></h5>
      <span>{initiative.infos[0].problem}</span>
    </Block>}
    {initiative.infos[0].goal && <Block>
      <h5><BuildCircle/><Trans>Goal</Trans></h5>
      <span>{initiative.infos[0].goal}</span>
    </Block>}
    {initiative.infos[0].context && <Block>
      <h5><Flag/><Trans>Context</Trans></h5>
      <span>{initiative.infos[0].context}</span>
    </Block>}
  </div> : null
}