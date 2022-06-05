import { atoms } from 'common';
import { ButtonWrapper } from "../styles";
import { useRecoilState } from "recoil";
import { ReactComponent as InitiativeIcon } from '@assets/icons/initiatives.svg'
import { ReactComponent as OrgIcon } from '@assets/icons/orgs.svg'
import { Trans } from '@lingui/macro'

export default function Buttons(){
  const [layers, setLayers] = useRecoilState(atoms.layers)

  const dict = {
    initiative: <>
      <InitiativeIcon/>
      <span><Trans>Initiatives</Trans></span></>,
    organization: <>
      <OrgIcon/>
      <span><Trans>Organisations</Trans></span></>
  }

  return <>
    <ButtonWrapper>
      {atoms.layers_list.map((v,key)=>
        <button key={key}
          children={dict[v]}
          onClick={()=>
            setLayers(
              (layers.includes(v) && layers.length===1)?
              [...atoms.layers_list].filter(d=>d!==v):
              layers.includes(v)?
              [...layers].filter(d=>d!==v):
              [...layers, v] )
          }
          className={
            layers.includes(v)?
            'selected':undefined
          }/>
      )}
    </ButtonWrapper>
  </>
}