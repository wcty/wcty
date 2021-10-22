import { Actions, Content, Image, Title } from "./styles";
import image from 'assets/photo/initiative_big.jpeg'
import Button from "components/Button";

function ImageHeaderCard(){
    return(
        <>
            <Image src={image}/>
            <Content>
                <Title>
                    Лавочка в парку по вулиці Бережанській
                </Title>
                <Actions>
                    <Button/>
                </Actions>
            </Content>
           
       </>
    )
}

export default ImageHeaderCard;