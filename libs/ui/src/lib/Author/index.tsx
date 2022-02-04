import { fixAvatar } from "@ui/common";
import { FlexboxProps, LayoutProps, PositionProps, SpaceProps } from "styled-system";
import { Avatar } from "../Avatar";
import { AuthorContainer, UserInfo } from "./styles";


export function Author ({
  picture,
  roles,
  name,
  date,
  ...props
}:{
  picture?: string,
  roles?: string[],
  name?: string,
  date?: Date
} & SpaceProps & LayoutProps & PositionProps & FlexboxProps){

  return (
    <AuthorContainer {...props}>
      <Avatar picture={fixAvatar(picture)}/>
      <UserInfo 
        roles={roles}
        name={name}  
        date={date}/>
    </AuthorContainer>
  )
}