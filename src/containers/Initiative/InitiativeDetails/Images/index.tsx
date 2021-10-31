import { useI18n, useUser } from "common";
import { useInitiativeByPkQuery } from "generated";
import { useParams } from "react-router-dom";
import { Container, Grid, Img } from "./styles";
import {ReactComponent as MediaIcon} from "assets/icons/media.svg"

export function Images() {
  const {id} = useParams<{id:string}>();
  const user = useUser()
  const {data} = useInitiativeByPkQuery({variables:{id,user_id:user?.id}, fetchPolicy:"cache-only"});
  const i18n = useI18n()

  return data?.initiative?.image ? <Container>
    <span>
      <span><MediaIcon/>{i18n('photos')}</span>
      <span>{i18n('show_all')}</span>
    </span>
    <Grid>
      <Img src={data.initiative.image} alt=""/>
    </Grid>
  </Container>: null
}