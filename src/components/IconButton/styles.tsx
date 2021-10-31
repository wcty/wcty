import styled,  {css} from "styled-components";
import { IIconButtonProps } from ".";

const small = css`
    width: 27px;
    height: 27px;
`

const medium = css`
    width: 48px;
    height: 48px;
`

const large = css`
width: 64px;
height: 64px;
`

const handleSize =  {
    ['small']:  small,
    ['medium']: medium,
    ['large']: large
}


export const Container =  styled.div.attrs((props: IIconButtonProps) => ({

}))<IIconButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.titleActive};
    border-radius: 50%;
    cursor: pointer;
    
    ${({size})  => handleSize[size!]}
    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    };
    &:active {
        background-color: ${props => props.theme.colors.secondaryAccent};
    };
    &:disabled {
        background-color: ${props => props.theme.colors.body};
    }
    & > svg {
        width: 60%;
        height: 60%;
       
    }

   
   

`