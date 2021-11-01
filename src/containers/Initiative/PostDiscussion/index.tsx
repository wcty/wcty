
import  UserPost from "components/Post";
import { IPostDiscussion } from "./IPostDiscussion";
import { Channels, Comments, Container, Expander, Header, Post, Title } from "./styles";
import Comment from 'components/Post/Comment'

import {ReactComponent as ArrowDownIco} from  'assets/icons/arrow-down.svg'

const post = {
    author: {name: "Анатолій Бойко", date : new Date(), roles: ['спеціаліст', 'волонтер', 'інвестор']},
    message: "Всім привіт! Я майстер і готовий встановити або зробити лаву.",
    tags: ['розроблення-проєкту'],
    comments: [{author: "User1", message: "cool", date: new Date()}],
    likes: [{user:"User 1", date: '5 серпня 2020'}] 
  }


  const comment = {
    author: {name: "Ольга Мельник", date : new Date(),  roles: ['iніціатор', 'волонтер', 'інвестор'] },
    message: 'Добрий день! Рада вашій пропозиції. Можливо у вас будуть якійсь креслення, преглянути?',
    likesCount: 4,
    date: new Date(),

    comments: [
        {
            author: {name: "Ольга Мельник", date : new Date(),  roles: ['iніціатор', 'волонтер', 'інвестор'] },
            message: 'Добрий день! Рада вашій пропозиції. Можливо у вас будуть якійсь креслення, преглянути?',
            likesCount: 4,
            date: new Date()
        },
        {
            author: {name: "Ольга Мельник", date : new Date(),  roles: ['iніціатор', 'волонтер', 'інвестор'] },
            message: 'Добрий день! Рада вашій пропозиції. Можливо у вас будуть якійсь креслення, преглянути?',
            likesCount: 4,
            date: new Date()
        }
    ]
    
};
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
                    <ArrowDownIco/>
                    Переглянути більше коментарів
                </Expander>
            <Comments>
                <Comment  {...comment}/>
            </Comments>
        </Container>
    )
}

export  default PostDiscussion;