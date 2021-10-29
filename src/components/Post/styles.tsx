import styled from "styled-components"

export const Container = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: column;
    background-color: ${props =>  props.theme.colors.backgroundLighter};
    box-shadow: 0px 0px 2px rgba(137, 150, 159, 0.1), 0px 2px 2px rgba(137, 150, 159, 0.1), 0px 1px 3px rgba(137, 150, 159, 0.1);
    border-radius: 3px;
    margin-bottom: 6px;
   
    `

export const AuthorContainer  = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px 16px 0 16px;
`

export const Avatar = styled.div`
    margin-right: 7px;
`

export const Info  =  styled.div`
 display: flex;
 flex-direction: column;
`

export const Name = styled.div`
    ${props => props.theme.font.body.semibold.t5};
`

export const Roles = styled.div`
    ${props => props.theme.font.body.regular.t5}
    color: ${props => props.theme.colors.label};
    text-transform: capitalize;
`

export const Date = styled.div`
    ${props => props.theme.font.body.regular.t5}
    color: ${props => props.theme.colors.label}
`

export const Content = styled.div`
    padding: 15px 19px 0 19px;
    ${props =>  props.theme.font.body.regular.t4};
`
    

export const Message = styled.div`
`

export const Tags = styled.div`
    padding-top: 27px;
    color: ${props => props.theme.colors.label}
`

export const Actions = styled.div`
    padding: 15px 19px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`

export const CommentCounter = styled.div`
color: ${props => props.theme.colors.label}
`

export const ToComment = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & > img {
        padding-right: 8px;
    }
`

export const Likes  = styled.div`
    color: ${props => props.theme.colors.label};
    & > img {
        padding-left: 8px;
    }
`
    