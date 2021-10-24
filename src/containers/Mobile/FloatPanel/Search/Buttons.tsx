import { useI18n } from 'common';
import { ButtonWrapper } from "../styles";
import { useRecoilState } from "recoil";
import { Map } from "components";
import { ReactComponent as InitiativeIcon } from 'assets/icons/initiatives.svg'
import { ReactComponent as OrgIcon } from 'assets/icons/orgs.svg'
import { useApolloClient, resetCaches } from '@apollo/client'

export default function Buttons(){
  const [layers, setLayers] = useRecoilState(Map.layers)
  const i18n = useI18n()
  const { cache } = useApolloClient()

  const dict = {
    initiative: <>
      <InitiativeIcon/>
      <span>{i18n('initiatives')}</span></>,
    organization: <>
      <OrgIcon/>
      <span>{i18n('organisations')}</span></>
  }

  return <>
    <ButtonWrapper>
      {Map.layers_list.map((v,key)=>
        <button {...{key}}
          children={dict[v]}
          onClick={()=>{
            setLayers(
              (layers.includes(v) && layers.length===1)?
              [...Map.layers_list].filter(d=>d!==v):
              layers.includes(v)?
              [...layers].filter(d=>d!==v):
              [...layers, v] )
            // cache.evict({ fieldName: 'entries_nearby', /*args: ['type']*/ })
            // cache.gc()
            // resetCaches()
          }}
          className={
            layers.includes(v)?
            'selected':undefined
          }/>
      )}
    </ButtonWrapper>
  </>
}