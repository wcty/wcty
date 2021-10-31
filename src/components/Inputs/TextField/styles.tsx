import styled from "styled-components"
import { ITextFieldProps } from "."

export const
Field = styled.input.attrs((props: ITextFieldProps) => ({
}))<ITextFieldProps>`
    outline: none;
    height: 29px;
    width:  100%;
    border: none;
    background-color: ${props => props.theme.colors.backgroundActive};
    border-radius: 3px;
    ${props => props.theme.font.body.regular.t5};
    color: ${props => props.theme.colors.secondary};
    
`,

Label = styled.label`
    display: block;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
`