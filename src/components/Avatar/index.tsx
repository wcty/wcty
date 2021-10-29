import { IAvatar } from "./IAvatar";
import { Container } from "./styles";
import UserIcon from 'assets/icons/user.svg'

export interface IAvatarProps extends IAvatar{}

function Avatar({picture = UserIcon, name = 'userpic'}: IAvatarProps) {
    return (
        <Container>
            <img src={picture} alt={name}/>
        </Container>
    )
}

export default Avatar;