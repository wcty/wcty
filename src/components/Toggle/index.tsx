import { useState } from "react";
import { Input, Slider, Switch } from "./styles";

export interface IToggle {
    checked: boolean
}

function Toggle({checked =  false} :IToggle) {

    const [toggle, setToggle] = useState(checked);
    return(
        <Switch>
            <Input type='checkbox' defaultChecked={toggle}/>
            <Slider {...{toggle}} onClick = {() =>  setToggle(!toggle)}/>
        </Switch>
    )
}

export default Toggle;