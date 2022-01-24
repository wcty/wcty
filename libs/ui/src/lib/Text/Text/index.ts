import styled, { css } from "styled-components"

export const 

Text = styled.span<{semibold?:boolean, mt?:string, mb?:string, color?:string}>`
  ${p=>p.semibold?
    p.theme.font.body.semibold.t4:
    p.theme.font.body.regular.t4 }
  text-align: center; 
  ${p=>p.mt && css`margin-top: ${p.mt};`}
  ${p=>p.mb && css`margin-bottom: ${p.mb};`}
  ${p=>p.color && css`color: ${p.color};`}

  >svg{
    margin-right: 8px;
  }
`,

Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0,0,0,0.1);
  margin-top: 2rem;
  margin-bottom: 1rem;
`