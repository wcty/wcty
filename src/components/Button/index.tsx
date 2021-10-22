import { EButtonTypes,  EButtonSize,  CustomButton } from "./styles";

//'primary'  |  'secondary' |  'subtle' |  'text'

export  interface IButtonProps  {
    type?: EButtonTypes,
    size?: EButtonSize,
    label?: string
}

function Button(props: IButtonProps) {
    return(
        <CustomButton
        label ='Button'
        customSize={EButtonSize.LARGE} 
        customType={EButtonTypes.PRIMARY}
        /> 
           
        
    )
}

export default  Button;