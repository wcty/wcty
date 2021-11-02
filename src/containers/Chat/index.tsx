
import { IChat } from "./IChat";
import { ChatMessages, Container, CreateMessage, Divider, HeaderSpace, Initiative, Manager, ManagerHeader, Messages, MessagesHeader, Search, SpaceBuffer, Title, UserCard, Users } from "./styles";
import SearchInput from 'components/Inputs/Search'
import Button from "components/Button";
import Author from "components/Post/Author";
import Avatar from "components/Avatar";

const authors = [
    {name: "Ольга Мельник", date : new Date(),  roles: ['iніціатор', 'волонтер', 'інвестор'] },
    {name: "Александр Бойко", date : new Date(),  roles: ['iніціатор', 'филантроп', 'миллиардер'] },
    {name: "Ольга Мельник", date : new Date(),  roles: ['iніціатор', 'волонтер', 'інвестор'] }
]
export interface IChatProps extends IChat {

}


function Chat({}: IChatProps) {
    return (
        <Container>
            <Manager>
                <ManagerHeader>
                    <Title>
                        Повідомлення
                    </Title>
                    <Initiative>
                        Лавочка біля будинку
                    </Initiative>
                </ManagerHeader>
                <Search>
                    <SearchInput/>
                </Search>
                <Users>
                    <p>+ Написати повідомлення</p>
                    {
                        authors.map((user,i)  => <Author key={i} {...user}/>)
                    }
                
                </Users>

            </Manager>
            <SpaceBuffer>
                <HeaderSpace></HeaderSpace>
                <Divider></Divider>
            </SpaceBuffer>
            <Messages>
                <MessagesHeader>
                    <UserCard>
                        <Avatar />
                        Ольга Мельник
                    </UserCard>
                </MessagesHeader>

                <ChatMessages>
                ChatMessages
                </ChatMessages>

                <CreateMessage>
                CreateMessage
                </CreateMessage>


            </Messages>
        </Container>
    )
}

export default Chat;