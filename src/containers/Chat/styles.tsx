import styled from 'styled-components/macro'

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

ChatMessages = styled.div`
    display: flex;
    flex-direction: column;
`,

MyMessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`,

CompanionMessageWrapper  = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`,

MyMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: #F0F4F8;
    max-width: 400px;
    /* Grayscale/Light Blue */

    border: 1px solid #F7F9FB;
    box-sizing: border-box;
    border-radius: 15px;
    margin: 5px;
`,

CompanionMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    max-width: 400px;
    background: #FFFFFF;
    border-radius: 3px 15px 15px 3px;
    margin: 5px 0 5px 30px;
`,




CreateMessage = styled.div`

    width: 100%;    
    display: flex;
    flex-direction: column;
    background-color: ${props =>  props.theme.colors.backgroundLighter};
    box-shadow: 0px 0px 2px rgba(137, 150, 159, 0.1), 0px 2px 2px rgba(137, 150, 159, 0.1), 0px 1px 3px rgba(137, 150, 159, 0.1);
    border-radius: 3px;
    padding-bottom: 10px;

`,

InputContent = styled.div`

display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 19px 0 19px;

    & > svg {
        padding-left: 4px;
        cursor: pointer;
    }
`,

SpaceBuffer = styled.div`
flex-grow: 0.1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,

Divider = styled.div`
    width: 0.1px;
    height: 100%;
    border-left: 1px solid rgba(210, 190, 167, 0.5);;

`,

HeaderSpace = styled.div`
    padding: 35px 0;
`








