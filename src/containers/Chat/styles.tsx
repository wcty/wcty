import styled from 'styled-components'

export const  Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.colors.primary};
    padding: 20px;
    ${props => props.theme.font.body.regular.t5};
`,

Manager = styled.div`
    flex-grow: 0.3;
    
`,

ManagerHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    border-bottom: 1px solid #000000;
`,

Title = styled.div`
    ${props => props.theme.font.title.mono.h4};
`,

Initiative = styled.div`
    ${props => props.theme.font.body.regular.t5};
`,

Search = styled.div`
    padding: 20px 0;
`,

Users = styled.div`
    color: ${props => props.theme.colors.label}
`,

Messages = styled.div`
flex-grow: 1;
`,

MessagesHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 0;
    border-bottom: 1px solid #000000;
`,

UserCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    //padding: 16px 16px 0 16px;
    ${props => props.theme.font.title.mono.h4};


`,

ChatMessages = styled.div``,

CreateMessage = styled.div``,

SpaceBuffer = styled.div`
flex-grow: 0.1;
`






