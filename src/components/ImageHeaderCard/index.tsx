import { Actions, Content, Image, Title } from "./styles";
import image from 'assets/photo/initiative_big.jpeg'
import Button from "components/Button";
import { EButtonSize, EButtonTypes } from "components/Button/styles";

function ImageHeaderCard(){
    return(
        <>
            <Image src={image}/>
            <Content>
                <Title>
                    Лавочка в парку по вулиці Бережанській
                </Title>
                <Actions>
                    <Button  size={EButtonSize.LARGE} type={EButtonTypes.PRIMARY} label='Button'/>
                </Actions>
            </Content>
           
       </>
    )
}

export default ImageHeaderCard;