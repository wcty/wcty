
import { ITextField } from "./ITextField";
import { Field } from "./styles";

export interface ITextFieldProps extends ITextField {}

function  TextField({}: ITextFieldProps) {
    return (
        <Field></Field>
    )
}

export default TextField;