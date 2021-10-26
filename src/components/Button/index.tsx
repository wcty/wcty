import { EButtonTypes,  EButtonSize,  CustomButton } from "./styles";

//'primary'  |  'secondary' |  'subtle' |  'text'

export  interface IButtonProps  {
    type?: EButtonTypes,
    size?: EButtonSize,
    label?: string,
    isDisabled?: boolean,
    onClick?: () => void;
}

function Button({
    type = EButtonTypes.PRIMARY,
    size =  EButtonSize.MEDIUM,
    label =  'Button',
    isDisabled = false,
    onClick, ...props} : IButtonProps) {
    return(
        <CustomButton
        label={label}
        customSize={size}
        customType={type}
        isDisabled={isDisabled}
        onClick={onClick}
        /> 
           
        
    )
}

export default  Button;