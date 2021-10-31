import styled from "styled-components"

export const
Field = styled.input`
    outline: none;
    height: 29px;
    width:  100%;
    border: none;
    background-color: ${props => props.theme.colors.backgroundActive};
    border-radius: 3px;
    
`,

Label = styled.label`
    display: block;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
`