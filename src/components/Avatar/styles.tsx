import styled , {css}from "styled-components"
import { EAvatarSize } from "./EAvatarSize"

export const 

small = css`
    width: 27px;
    height: 27px;
`,

medium = css`
    width: 34px;
    height: 34px;
`,

large  = css`
    width: 52px;
    height: 52px;
`;

const handleSize = {
    [EAvatarSize.LARGE]:large,
    [EAvatarSize.MEDIUM]:medium,
    [EAvatarSize.SMALL]:small,
}


interface IContainerProps {
    size: EAvatarSize
}

export const Container = styled.div<IContainerProps>`
    margin-right: 7px;
    & > img  {
        ${({size}) => handleSize[size]};
    }
`;
