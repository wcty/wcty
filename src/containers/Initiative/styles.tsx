import styled, {css} from "styled-components/macro";

export const Container = {
  Desktop: styled.div`
    width: 960px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: scroll;
  `,
  Mobile: styled.div`
    width: 100%;
    height: 100%;
    min-height: 100%;
    position: relative;
    background-color: ${p=>p.theme.colors.primary};
    overflow: scroll;
    >img:first-child{
      object-fit: cover;
      width: 100%;
      height: 148px;
    }
  `,
},

Header = styled.div`
    width: 100%;
    
`,

Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`,

RightColumn = styled.div`
    width: 552px;

`,

LeftColumn = styled.div`
    width: 500px
`

