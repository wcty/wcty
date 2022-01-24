
import { IChat } from "./IChat";
import { ChatMessages, CompanionMessage, CompanionMessageWrapper, Container, CreateMessage, Divider, HeaderSpace, Initiative, InputContent, Manager, ManagerHeader, Messages, MessagesHeader, MyMessage, MyMessageWrapper, Search, SpaceBuffer, Title, UserCard, Users } from "./styles";
import { Button, Avatar, TextField,  Search as SearchInput } from "@ui";
import Author from "components/Post/Author";

import {ReactComponent as SendIco} from "@assets/icons/send-message.svg";

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
                    <MyMessageWrapper>
                        <MyMessage>
                        Ольга, доброго дня! 🙂 Чекаю від вас лінк на відредактований текст, щоб доробити макет.
                        </MyMessage>
                    </MyMessageWrapper>
                    <CompanionMessageWrapper>
                        <Avatar/>
                        <CompanionMessage>
                                Доброго дня!
                        </CompanionMessage>
                        <CompanionMessage>
                        Марина
                        Ольга, доброго дня! 🙂 Чекаю від вас лінк н...
                        Хвилину назад відправила вам на пошту
                        </CompanionMessage>
                        <CompanionMessage>
                            Підскажіть, будь ласка, коли чекати правки?
                        </CompanionMessage>
                    </CompanionMessageWrapper>
                    <MyMessageWrapper>
                        <MyMessage>
                        Супер. Бачу листа. Макет буде готовий зранку.
                        </MyMessage>
                    </MyMessageWrapper>
                </ChatMessages>

                <CreateMessage>
                    <InputContent> 
                        <Avatar size={'small'}/>
                        <TextField/>
                        <SendIco/>
                    </InputContent> 
                </CreateMessage>


            </Messages>
        </Container>
    )
}

export default Chat;