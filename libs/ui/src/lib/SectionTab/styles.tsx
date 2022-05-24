import styled, {css} from 'styled-components'
import { ISectionTabProps } from '.'

const disabled  =  css`
    background-color: ${props => props.theme.colors.backgroundLight};
    opacity: 0.4;
`


export const Container = styled.div.attrs((props: ISectionTabProps) => ({
}))<ISectionTabProps>`
    justify-content: center;
    align-items: center;
    ${props => props.theme.font.body.regular.t4};
    border: none;
    border-radius: 18px;
    height: 36px;
    padding: 4px 7px;
    margin-right: 10px;
    text-align: center;
    cursor: pointer;
    display: flex;
    padding: 0.5rem 1rem;
    ${props => props.active ? 
    css<{}>`
        background-color: #F0F4F8 !important;
        color: #174AFF !important;
      `:
    css<{}>`
        background-color: white !important;
        color: ${props => props.theme.colors.label} !important;
      `}
    >span{
      color: inherit;
    }
    &:hover {
      background-color: ${props => props.theme.colors.backgroundActive};
    }

    &:active {
      background-color: ${props => props.theme.colors.backgroundLight};
    };
    ${props => props.disabled ? disabled: ''}
`