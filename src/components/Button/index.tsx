import { EButtonTypes,  EButtonSize,  CustomButton } from "./styles";

//'primary'  |  'secondary' |  'subtle' |  'text'

export  interface IButtonProps  {
    type: EButtonTypes,
    size: EButtonSize,
    label: string
}

function Button({type,size,label}: IButtonProps) {
    return(
        <CustomButton
        label={label}
        customSize={size}
        customType={type}
        /> 
           
        
    )
}

export default  Button;