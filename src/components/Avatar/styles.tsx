import styled , {css}from "styled-components"
import { EAvatarSize } from "./EAvatarSize"
import { IAvatar } from "./IAvatar";

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
    ['large']:large,
    ['medium']:medium,
    ['small']:small,
}




export const Container = styled.div<IAvatar>`
    margin-right: 7px;
    & > img  {
        ${({size}) => handleSize[size!]};
    }
`;
