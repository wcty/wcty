import styled,  {css} from 'styled-components/macro';
import { IIconButtonProps } from ".";

const small = css<{}>`
    width: 27px;
    height: 27px;
`

const medium = css<{}>`
    width: 48px;
    height: 48px;
`

const large = css<{}>`
    width: 64px;
    height: 64px;
`

const handleSize =  {
    ['small']:  small,
    ['medium']: medium,
    ['large']: large
}

export const Container =  styled.div.attrs((props: IIconButtonProps) => ({
    onclick : props.onClick
}))<IIconButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background-color: ${props => props.theme.colors.titleActive};
    margin-left: 5px;
    
    cursor: pointer;

    & > svg {
        width: 60%;
        height: 60%;
    }
    
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

    border-radius: 100%;
`