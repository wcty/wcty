import {  useLayout, useUser } from "common";
import { InitiativePublicByPkQuery } from "generated";
import { Container, Grid, Img } from "./styles";
import { ReactComponent as MediaIcon } from "@assets/icons/media.svg"
import { useRouter } from "next/router";
import { InitiativeProps } from "containers/Initiative";
import { Trans } from '@lingui/macro'

export function Images({initiative}:InitiativeProps) {
  const { id } = useRouter().query;
  const user = useUser()
  const layout = useLayout()

  return initiative?.image ? 
    <Container>
      <span>
        <span><MediaIcon/><Trans>Photos</Trans></span>
        <span><Trans>Show all</Trans></span>
      </span>
      <Grid>
        <Img src={initiative.image} alt=""/>
      </Grid>
    </Container>: null
}