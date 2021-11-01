import styled from "styled-components"

export const  Container = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,

Header = styled.div``,

Title = styled.div`
    ${props => props.theme.font.title.mono.h2}
    text-align: center;
`,

Channels = styled.div`
    ${props => props.theme.font.body.regular.t5}
    text-align: center;
`,


Post = styled.div``,

Expander = styled.div``,

Comments = styled.div``