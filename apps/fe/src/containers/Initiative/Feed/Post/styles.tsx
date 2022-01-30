import styled, { css } from 'styled-components'
import { IUserInfo } from './types/IUserInfo'

export const 

AuthorContainer  = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px 16px 0 16px;
`,

Avatar = styled.div`
    flex-shrink: 0;
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
    color: ${props  => props.theme.colors.body};
`,
    

Message = styled.div`
`,

Tags = styled.div`
    padding-top: 27px;
    color: ${props => props.theme.colors.label}
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

LikeCounter = styled.div`
    padding-right: 4px;
`,

Likes  = styled.div<{ liked?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${p => p.theme.colors.label};
    >svg{
      ${p=>p.liked? 
        css`fill: ${p => p.theme.colors.titleActive};`:
        css`fill: ${p => p.theme.colors.label};`}
    }
    :hover {
      color: ${p => p.theme.colors.secondary};
      >svg{
        fill: ${p => p.theme.colors.secondary} !important;
      }
    }
    :active {
      color: ${p => p.theme.colors.secondaryAccent};
      >svg{
        fill: ${p => p.theme.colors.secondaryAccent} !important;
      }
    }
    :disabled {
      color: ${p => p.theme.colors.placeholder};
      >svg{
        fill: ${p => p.theme.colors.placeholder} !important;
      }
    }
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
`,

Actions = styled.div`
  padding: 15px 19px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,

Container = styled.div`
  width: 100%;    
  display: flex;
  flex-direction: column;
  background-color: ${props =>  props.theme.colors.backgroundLighter};
  box-shadow: 0px 0px 2px rgba(137, 150, 159, 0.1), 0px 2px 2px rgba(137, 150, 159, 0.1), 0px 1px 3px rgba(137, 150, 159, 0.1);
  border-radius: 3px;
  margin-bottom: 6px;
`






