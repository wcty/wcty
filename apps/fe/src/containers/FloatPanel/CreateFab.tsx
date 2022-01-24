import { Fab } from "./styles";
import { ReactComponent as Cross } from '@assets/icons/cross.svg'
import { ButtonHTMLAttributes } from "react";

export default function CreateFab(props:ButtonHTMLAttributes<HTMLButtonElement>){

  return <Fab {...props}><Cross/></Fab>
}