import { IAvatar } from "./IAvatar";
import { Container } from "./styles";
import UserIcon from 'assets/icons/user.svg'
import { EAvatarSize } from "./EAvatarSize";

export interface IAvatarProps extends IAvatar{}

function Avatar({picture = UserIcon, name = 'userpic',  size  = EAvatarSize.MEDIUM}: IAvatarProps) {
    return (
        <Container size={size}>
            <img src={picture} alt={name}/>
        </Container>
    )
}

export default Avatar;