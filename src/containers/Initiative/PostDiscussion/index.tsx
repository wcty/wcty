
import  UserPost from "components/Post";
import { IPostDiscussion } from "./IPostDiscussion";
import { Channels, Comments, Container, Expander, Header, Post, Title } from "./styles";

const post = {
    author: {name: "Анатолій Бойко", date : new Date(), roles: ['спеціаліст', 'волонтер', 'інвестор']},
    message: "Всім привіт! Я майстер і готовий встановити або зробити лаву.",
    tags: ['розроблення-проєкту'],
    comments: [{author: "User1", message: "cool", date: new Date()}],
    likes: [{user:"User 1", date: '5 серпня 2020'}] 
  }
export interface IPostDiscussionProps extends IPostDiscussion {}


function PostDiscussion({}:IPostDiscussionProps) {
    return (
        <Container>
            <Header>
                <Title>
                    Лавочка біля будинку
                </Title>
                <Channels>
                    #збір-коштів #розробка-проєкту
                </Channels>
            </Header>

            <Post>
                <UserPost {...post} />
            </Post>

            <Expander>
                Expander
            </Expander>

            <Comments>
                Comments
            </Comments>
        </Container>
    )
}

export  default PostDiscussion;