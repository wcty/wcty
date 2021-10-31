import styled from "styled-components/macro";

export const Container = styled.div`
    width: 960px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`,

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
`,

Channels = styled.div`
    color: ${props => props.theme.colors.label};
    padding: 20px 0;
`

