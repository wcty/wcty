import styled from "styled-components/macro";
import BurgerFab from "../FloatPanelMobile/BurgerFab";

export const MapWrapper = styled.div`
  top: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
`

export const ContentWrapper = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.colors.primary}
`,

Burger = styled.div.attrs({
  children: <BurgerFab/>
})`
  position: fixed;
  top: 29px;
  left: 0;
  z-index: 1;
`