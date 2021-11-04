import styled from 'styled-components/macro'
import { IUserInfo } from './types/IUserInfo'

export const Container = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: column;
    background-color: ${props =>  props.theme.colors.backgroundLighter};
    box-shadow: 0px 0px 2px rgba(137, 150, 159, 0.1), 0px 2px 2px rgba(137, 150, 159, 0.1), 0px 1px 3px rgba(137, 150, 159, 0.1);
    border-radius: 3px;
    margin-bottom: 6px;
    `,

AuthorContainer  = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px 16px 0 16px;
`,

Avatar = styled.div`
    margin-right: 7px;
`,

Info  =  styled.div`
 display: flex;
 flex-direction: column;
`,

Name = styled.div`
    ${props => props.theme.font.body.semibold.t5};
`,

Roles = styled.div`
    ${props => props.theme.font.body.regular.t5}
    color: ${props => props.theme.colors.label};
    text-transform: capitalize;
`,

Date = styled.div`
    ${props => props.theme.font.body.regular.t5}
    color: ${props => props.theme.colors.label}
`,

UserInfo = styled.div.attrs(({
  name, roles, date
}: IUserInfo)=>({
  name, roles, date,
  children: <>
      <Name>{name}</Name>
      <Roles>{roles?.join()}</Roles>
      <Date>{date.toDateString()}</Date>
    </>
}))`
  display: flex;
  flex-direction: column;
`, 

Content = styled.div`
    padding: 15px 19px 0 19px;
    ${props =>  props.theme.font.body.regular.t4};
`,
    

Message = styled.div`
`,

Tags = styled.div`
    padding-top: 27px;
    color: ${props => props.theme.colors.label}
`,

Actions = styled.div`
    padding: 15px 19px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`,

CommentCounter = styled.div`
color: ${props => props.theme.colors.label}
`,

ToComment = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & > img {
        padding-right: 8px;
    }
`,

Likes  = styled.div`
    color: ${props => props.theme.colors.label};
    & > img {
        padding-left: 8px;
    }
`,

InputContent =  styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 19px 0 19px;

    & > img {
        padding-left: 4px;
    }
`,

Channels  = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.label};
`,

CreateVote = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`,

Chip = styled.div`
    height: 19px;
    ${props => props.theme.font.body.regular.t5};
    color: ${props => props.theme.colors.label};
    border: none;
    border-radius: 3px;
    background-color: ${props => props.theme.colors.backgroundActive};
    padding: 5px;
    margin-right: 10px;
`






