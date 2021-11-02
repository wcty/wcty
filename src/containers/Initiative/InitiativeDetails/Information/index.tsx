import { useI18n, useLayout, useUser } from "common";
import { useInitiativeByPkQuery } from "generated";
import { useParams } from "react-router-dom";
import { Block } from "./styles";
import {ReactComponent as Flag} from "assets/icons/flag.svg"
import {ReactComponent as Lightbulb} from "assets/icons/lightbulb.svg"
import {ReactComponent as BuildCircle} from "assets/icons/build_circle.svg"

export default function Information() {
  const {id} = useParams<{id:string}>();
  const user = useUser()
  const {data} = useInitiativeByPkQuery({variables:{id,user_id:user?.id}, fetchPolicy:"cache-only"});
  const i18n = useI18n()
  
  return data?.initiative?.infos?.[0]? <div>
    {data.initiative.infos[0].problem && <Block>
      <h5><Lightbulb/>{i18n('problem_or_idea')}</h5>
      <span>{data.initiative.infos[0].problem}</span>
    </Block>}
    {data.initiative.infos[0].goal && <Block>
      <h5><BuildCircle/>{i18n('goal')}</h5>
      <span>{data.initiative.infos[0].goal}</span>
    </Block>}
    {data.initiative.infos[0].context && <Block>
      <h5><Flag/>{i18n('context')}</h5>
      <span>{data.initiative.infos[0].context}</span>
    </Block>}
  </div>: 
  data?.initiative?.description?
  <div>
    <Block>
      <h5><Lightbulb/>{i18n('problem_or_idea')}</h5>
      <span>{data?.initiative?.description}</span>
    </Block>
  </div>: null
}