import styled, { css } from "styled-components/macro"

export const 
ButtonsWrapper = styled.div`
  width: 30px;
  position: absolute;
  left: ${p=>p.theme.layout==='mobile'?css`19px`:css`10px`};;
  bottom: ${p=>p.theme.layout==='mobile'?css`120px`:css`25px`};
  margin-bottom: 9px;
`,

Button = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 9px;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.1);
`
