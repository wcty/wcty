import { IIconButton } from "./IIconButton";
import { CustomIconButton } from "./styles";

export interface IIconButtonProps extends IIconButton{
    onClick:() => void
}

function IconButton({name = "icon_button", Icon, type = 'primary', ...props}:IIconButtonProps){
    return(
        <>
        {Icon}
        </>
    )
}
export default IconButton;