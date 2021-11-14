import { useI18n, useLayout, useUser } from "common";
import { InitiativePublicByPkQuery } from "generated";
import { Container, Grid, Img } from "./styles";
import { ReactComponent as MediaIcon } from "assets/icons/media.svg"
import { useRouter } from "next/router";
import { InitiativeProps } from "containers/Initiative";

export function Images({initiative}:InitiativeProps) {
  const { id } = useRouter().query;
  const user = useUser()
  const i18n = useI18n()
  const layout = useLayout()

  return initiative?.image ? 
    <Container>
      <span>
        <span><MediaIcon/>{i18n('photos')}</span>
        <span>{i18n('show_all')}</span>
      </span>
      <Grid>
        <Img src={initiative.image} alt=""/>
      </Grid>
    </Container>: null
}