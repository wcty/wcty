import styled from "styled-components"

export const Container = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: column;
    background-color: ${props =>  props.theme.colors.backgroundLighter};
    box-shadow: 0px 0px 2px rgba(137, 150, 159, 0.1), 0px 2px 2px rgba(137, 150, 159, 0.1), 0px 1px 3px rgba(137, 150, 159, 0.1);
    border-radius: 3px;
    margin-bottom: 6px;
    padding: 15px 20px;
    `

export const Author  = styled.div`
`
export const Avatar = styled.div``

export const Name = styled.div``

export const Roles = styled.div``

export const Date = styled.div``

export const Message = styled.div`
    ${props =>  props.theme.font.body.regular.t4};
    padding: 15px 0;
`

export const Tags = styled.div``

export const Actions = styled.div``
    