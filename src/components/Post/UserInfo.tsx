import { IUserInfo } from "./IUserInfo";
import { Date, Info, Name, Roles } from "./styles";

export interface IUserInfoProps extends IUserInfo {}

function UserInfo({name, roles, date}: IUserInfoProps) {
    return (
        <Info>
            <Name>{name}</Name>
            <Roles>{roles?.join()}</Roles>
            <Date>{date.toDateString()}</Date>
        </Info>
    )
}

export default UserInfo;