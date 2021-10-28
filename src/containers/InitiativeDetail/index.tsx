import Chat from "components/Chat";
import ImageHeaderCard from "components/ImageHeaderCard";
import { IPost } from "components/Post/IPost";

import { Body, Container, Header,  LeftColumn,  RightColumn } from "./styles";
const posts: IPost[] =  [
    {
        author:  "Анатолій Бойко",
        message: "Всім привіт! Я майстер і готовий встановити або зробити лаву.",
        roles: ['спеціаліст', 'волонтер', 'інвестор' ],
        tags: ['розроблення-проєкту'],
        date: '5 серпня 2020',
        comments: [{author: "User1", message: "cool", date: '5 серпня 2020'}],
        likes: [{user:"User 1", date: '5 серпня 2020'}] 
    },
    {
        author:  "Ольга Мельник",
        message: "В парку по вул. Бережанській біля дитячого майданчика дуже не вистачає лавочки. Збираємо кошти на виробництво та встановлення.",
        roles: ['ініціатор', 'волонтер', 'інвестор' ],
        tags: ['розроблення-проєкту'],
        date: '5 серпня 2020',
        comments: [{author: "User1", message: "cool", date: '5 серпня 2020'}, {author: "User2", message: "nice!", date: '5 серпня 2020'}],
        likes: [{user:"User 1", date: '5 серпня 2020'}] 
    },
  
]

function InitiativeDetail() {

    return(
        <Container>
            <Header>
                <ImageHeaderCard/>
            </Header>
            <Body>
                <LeftColumn>
                </LeftColumn>
                <RightColumn>
                    <Chat posts={posts}/>
                </RightColumn>
            </Body>
            
        </Container>
    
    )
}

export default InitiativeDetail;
