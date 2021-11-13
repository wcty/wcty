import styled, {css} from "styled-components";

export const Container = {
  Desktop: styled.div`
    width: 960px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-x: visible;
  `,
  Mobile: styled.div`
    width: 100%;
    height: 100%;
    min-height: 100%;
    position: relative;
    background-color: ${p=>p.theme.colors.primary};
    overflow: auto;
  `,
},

Body = {
  Desktop: styled.div`
    width: 100%;
    display: flex;
  `,
  Mobile: styled.div`
    width: 100%;
  `,
},

RightColumn = styled.div`
    flex: 1 1 auto;
    padding-left: 2rem;
`,

LeftColumn = styled.div`
    flex: 0 0 400px
`

