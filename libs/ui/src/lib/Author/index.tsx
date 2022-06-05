import { fixAvatar } from "@ui/common";
import { FlexboxProps, LayoutProps, PositionProps, SpaceProps } from "styled-system";
import { Avatar } from "../Avatar";
import { AuthorContainer, UserInfo } from "./styles";


export function Author ({
  picture,
  roles,
  name,
  date,
  onClick,
  ...props
}:{
  picture?: string,
  roles?: string[],
  name?: string,
  date?: Date,
  onClick?: () => void
} & SpaceProps & LayoutProps & PositionProps & FlexboxProps){

  return (
    <AuthorContainer {...props} onClick={onClick}>
      <Avatar picture={fixAvatar(picture)} onClick={onClick}/>
      <UserInfo 
        onClick={onClick}
        roles={roles}
        name={name}  
        date={date}/>
    </AuthorContainer>
  )
}