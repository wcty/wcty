import {  useLayout, useUser } from "common";
import { Container, Grid, Img } from "./styles";
import { ReactComponent as MediaIcon } from "@assets/icons/media.svg"
import { useRouter } from "next/router";
import { InitiativeProps } from "containers/Initiative";
import { Trans } from '@lingui/macro'
import { useGetFilesQuery } from "generated";

export function Images({initiative}:InitiativeProps) {
  const { id } = useRouter().query;
  const user = useUser()
  const layout = useLayout()
  const { data } = useGetFilesQuery({
    variables:{
      where:{
        initiative_id:{
          _eq: initiative?.id
        }
      }
    }
  })

  return initiative?.image ? 
    <Container>
      <span>
        <span><MediaIcon/><Trans>Photos</Trans></span>
        <span><Trans>Show all</Trans></span>
      </span>
      <Grid>
        {data?.files.map((v,key)=><Img {...{key}} src={v.downloadable_url+'?q=50&w=150'} alt=""/> )}
      </Grid>
    </Container>: null
}