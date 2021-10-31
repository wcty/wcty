import styled, {css} from "styled-components"
import { IIconButtonProps } from "."

const primary = css`
    width: 48px;
    height: 48px;
`

const subtle = css`
    width: 26px;
    height: 26px;
`
const handleType =  {
    primary,
    subtle
}
export  const  CustomIconButton = styled.img.attrs((props: IIconButtonProps ) => ({
    src : props.icon,
    alt: props.name ,
    onclick : props.onClick
}))<IIconButtonProps>`
    padding: 4px;
    ${({type}) => handleType[type]}
`