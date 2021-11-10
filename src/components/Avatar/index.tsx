import { IAvatar } from "./IAvatar";
import UserIcon from 'assets/icons/user.svg'
import styled , {css}from 'styled-components/macro'

export interface IAvatarProps extends IAvatar{}

const Avatar = styled.div
  .attrs(({
    picture = UserIcon, 
    name = 'userpic',  
    size  = 'medium'
  }:IAvatar)=>({
    size, name, picture,
    children: <img src={picture} alt={name}/>,
  }))`
      flex-shrink: 0;
      margin-right: 7px;
      border-radius: 50%;
      overflow: hidden;
      ${({size}) => handleSize[size!]};
      & > img  {
          width: 100%;
          height: 100%;
          object-fit: contain;
         
      }
  `;

export const 
small = css<{}>`
    width: 27px;
    height: 27px;
`,
medium = css<{}>`
    width: 34px;
    height: 34px;
`,
large  = css<{}>`
    width: 52px;
    height: 52px;
`;

const handleSize = {
    ['large']:large,
    ['medium']:medium,
    ['small']:small,
}

export default Avatar