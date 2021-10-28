import styled from "styled-components/macro";
import BurgerFab from "./FloatPanel/BurgerFab";

export const MapWrapper = styled.div`
  top: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
`,

Burger = styled.div.attrs({
  children: <BurgerFab/>
})`
  position: fixed;
  top: 29px;
  left: 0
`