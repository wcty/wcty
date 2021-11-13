import { useI18n, useLayout, useUser } from "common";
import { useInitiativeByPkQuery } from "generated";
import { Container, Grid, Img } from "./styles";
import { ReactComponent as MediaIcon } from "assets/icons/media.svg"
import { useRouter } from "next/router";

export function Images() {
  const { id } = useRouter().query;
  const user = useUser()
  const {data} = useInitiativeByPkQuery({variables:{id,user_id:user?.id}, fetchPolicy:"cache-only"});
  const i18n = useI18n()
  const layout = useLayout()

  return data?.initiative?.image ? 
    <Container>
      <span>
        <span><MediaIcon/>{i18n('photos')}</span>
        <span>{i18n('show_all')}</span>
      </span>
      <Grid>
        <Img src={data.initiative.image} alt=""/>
      </Grid>
    </Container>: null
}