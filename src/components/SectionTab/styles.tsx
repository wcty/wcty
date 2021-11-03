import styled, {css} from 'styled-components/macro'
import { ISectionTabProps } from '.'

const disabled  =  css`
    background-color: ${props => props.theme.colors.backgroundLight};
    opacity: 0.4;
`


export const Container = styled.div.attrs((props: ISectionTabProps) => ({
}))<ISectionTabProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    
    ${props => props.theme.font.body.regular.t5};
    color: ${props => props.theme.colors.label};
    border: none;
    border-radius: 3px;
    background-color: white;
    padding: 4px 7px;
    margin-right: 10px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.backgroundActive};
    }

    &:active {
        background-color: ${props => props.theme.colors.backgroundLight};
    };
    

    ${props => props.disabled ? disabled: ''}
`