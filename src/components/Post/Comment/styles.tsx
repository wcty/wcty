import styled from "styled-components"

export const Footer = styled.div`
    display: flex;
    justify-content: flex-start;
    
    align-items: center;
    color: ${props =>  props.theme.colors.label};

`,

Content = styled.div`
    padding: 15px 19px 0 55px;
    ${props =>  props.theme.font.body.regular.t5};
`,

Info = styled.div`
    display: flex;
    justify-content: flex-start;
    
`,


Message = styled.div`
    color: ${props =>  props.theme.colors.body};
`,

Time = styled.div`
    padding: 0 20px 0 10px;
`,

Likes  = styled.div``,

Actions = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
`,

Reply = styled.div``,

Offset = styled.div`
padding-left: 50px;
`




