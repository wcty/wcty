import { useI18n, useLayout, useUser } from "common";
import { InitiativePublicByPkQuery } from "generated";
import { Block } from "./styles";
import {ReactComponent as Flag} from "assets/icons/flag.svg"
import {ReactComponent as Lightbulb} from "assets/icons/lightbulb.svg"
import {ReactComponent as BuildCircle} from "assets/icons/build_circle.svg"
import { useRouter } from "next/router";
import { InitiativeProps } from "containers/Initiative";

export default function Information({initiative}:InitiativeProps) {
  const { id } = useRouter().query;
  const user = useUser()
  const i18n = useI18n()
  
  return initiative?.infos?.[0]? <div>
    {initiative.infos[0].problem && <Block>
      <h5><Lightbulb/>{i18n('problem_or_idea')}</h5>
      <span>{initiative.infos[0].problem}</span>
    </Block>}
    {initiative.infos[0].goal && <Block>
      <h5><BuildCircle/>{i18n('goal')}</h5>
      <span>{initiative.infos[0].goal}</span>
    </Block>}
    {initiative.infos[0].context && <Block>
      <h5><Flag/>{i18n('context')}</h5>
      <span>{initiative.infos[0].context}</span>
    </Block>}
  </div> : null
}