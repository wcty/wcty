import styled from "styled-components"

export const  Container = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    ${props => props.theme.font.body.regular.t5}
`,

Header = styled.div``,

Title = styled.div`
    ${props => props.theme.font.title.mono.h2}
    text-align: center;
`,

Channels = styled.div`
    text-align: center;
`,


Post = styled.div``,

Expander = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${color => color.theme.colors.label};
    padding: 6px 0;
    & > svg {
        padding: 0 10px;
    }
`,

Comments = styled.div``