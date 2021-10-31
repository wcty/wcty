import { auth } from "common";
import { Feed } from "components";
import { IPost } from "components/Post/IPost";
import { useFeedQuery } from "generated";
import { useParams } from "react-router-dom";

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

export default ()=>{
  const { id } = useParams<{id:string}>();
  const { data:postsData, error } = useFeedQuery({
    variables:{id}, 
    context:{
      headers:{
        "x-hasura-role":"user",
        "authorization": `Bearer ${auth.getJWTToken()}`
      }
    }
  })
  console.log(postsData, error)

  console.log(auth.getClaim("x-hasura-user-id"))
  return <Feed posts={posts}/>
}