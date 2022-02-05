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
  display: flex;
  justify-content: center;
  ${p=>p.theme.layout==='desktop'&&css<{}>`display: flex;`}
`,

CenterColumn = styled.div`
  flex: 1 1 auto;
  max-width: 550px;
  margin-top: 2rem;
`,

ArrowLeft = styled.div`
  width: 12px;
  height: 12px;
  border-left: 1px solid ${props => props.theme.colors.label};
  border-top: 1px solid ${props => props.theme.colors.label};
  transform: rotate(-45deg) translate(-17px, -1px);
  margin-right: 24px;
`
