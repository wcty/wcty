import styled from "styled-components/macro";

export const Image = styled.img`
    width: 960px;
`
export const Content = styled.div``
export const Info =  styled.div``
export const Title = styled.h2``

export const  Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px ${props => props.theme.colors.titleActive};
    border-style: solid none;
    padding: 10px 0;
`
export const  Buttons = styled.div`
    display: flex;
    flex-direction: row;
`

export const Icons  =  styled.div`
    display: flex;
    flex-direction: row;
`
