import styled, {css} from "styled-components";

export const Container = styled.div`
  ${p=>p.theme.layout==='desktop'?
  css<{}>`
    width: 960px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-x: visible;`:
  css<{}>`
    width: 100%;
    height: 100%;
    min-height: 100%;
    position: relative;
    background-color: ${p=>p.theme.colors.primary};`
}`,

Body = styled.div`
  width: 100%;
  ${p=>p.theme.layout==='desktop'&&css<{}>`display: flex;`}
`,

RightColumn = styled.div`
    flex: 1 1 auto;
    padding-left: 2rem;
`,

LeftColumn = styled.div`
    flex: 0 0 400px
`

