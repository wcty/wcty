
import { ChangeEvent } from "react";
import { ITextField } from "./ITextField";
import { Field } from "./styles";

export interface ITextFieldProps extends ITextField {
    onChange?: (e: any) => void
}

function  TextField({onChange  = (e) => {} }: ITextFieldProps) {
    return (
        <Field  onChange={ e => onChange(e.target.value) } ></Field>
    )
}

export default TextField;