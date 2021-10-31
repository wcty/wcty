import Feed from "components/Feed";
import ImageHeaderCard from "components/ImageHeaderCard";
import {CreatePost} from "components/Post";
import { IPost } from "components/Post/IPost";
import { useParams } from "react-router-dom";

import { Body, Channels, Container, Header,  LeftColumn,  RightColumn } from "./styles";
const posts: IPost[] =  [
    {
        author: {name: "Анатолій Бойко", date : new Date(), roles: ['спеціаліст', 'волонтер', 'інвестор']},
        message: "Всім привіт! Я майстер і готовий встановити або зробити лаву.",
        tags: ['розроблення-проєкту'],
        comments: [{author: "User1", message: "cool", date: new Date()}],
        likes: [{user:"User 1", date: '5 серпня 2020'}] 
    },
    {
        author: {name: "Ольга Мельник", date : new Date(),  roles: ['iніціатор', 'волонтер', 'інвестор'] },
        message: "В парку по вул. Бережанській біля дитячого майданчика дуже не вистачає лавочки. Збираємо кошти на виробництво та встановлення.",
        tags: ['розроблення-проєкту'],
        comments: [{author: "User1", message: "cool", date: new Date()}, {author: "User2", message: "nice!", date: new Date()}],
        likes: [{user:"User 1", date: '5 серпня 2020'}] 
    }
  
]

function InitiativeDetail() {
    const {id} = useParams<{id:string}>();
    

    return(
        <Container>
            <Header>
                <ImageHeaderCard/>
            </Header>
            <Body>
                <LeftColumn>
                </LeftColumn>
                <RightColumn>
                    <Channels> #збір-коштів #розробка-проєкту</Channels>
                    <CreatePost/>
                    <Feed posts={posts}/>
                </RightColumn>
            </Body>
            
        </Container>
    
    )
}

export default InitiativeDetail;
