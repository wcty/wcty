import { IIconButton } from "./IIconButton";
import { CustomIconButton } from "./styles";

export interface IIconButtonProps extends IIconButton{
    onClick:() => void
}

function IconButton({name = "icon_button", type = 'primary', ...props}:IIconButtonProps){
    return(
        <CustomIconButton name={name}  type={type} {...props} />
    )
}
s
export default IconButton;