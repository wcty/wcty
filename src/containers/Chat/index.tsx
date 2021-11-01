
import { IChat } from "./IChat";
import { ChatMessages, Container, CreateMessage, Initiative, Manager, ManagerHeader, Messages, MessagesHeader, Search, Title, UserCard, Users } from "./styles";

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
                Search
                </Search>
                <Users>
                Users
                </Users>

            </Manager>
            <Messages>
                <MessagesHeader>
                    <UserCard>
                    UserCard
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