import styled, { css } from "styled-components";
import {ReactComponent as Fillet} from '@assets/icons/fillet.svg'
import {ReactComponent as ArrowUp} from '@assets/icons/arrow-up.svg'
import { ReactNode } from "react";

export const 
Image = styled.div.attrs((props:{
  src:string,
  children?: ReactNode
})=>({
  children: <><img src={props.src}/>{props.children}</>
}))<{src:string}>`
  ${p=>p.theme.layout==='desktop'?
  css<{}>`
    >img:first-child{
      margin-top: calc( min((100vw - 960px) / 2, 60px));
      width: 960px;
      height: 360px;
      object-fit: cover;
      border-radius: 3px;
    }
  `:
  css<{}>`
    width: 100%;
    min-height: 148px;
    max-height: 360px;
    height: calc(0.375 * 100vw);
    >img:first-child{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  `}
`,

ArrowUpIcon = styled(ArrowUp)`
  position: absolute;
  left: 17px;
  top: 10px;
`,

FilletButton = styled.button.attrs({
  children: <><Fillet/><ArrowUpIcon/></>
})`
  position: absolute;
  top: calc(0.375 * 100vw);
  padding: 0;
  border: none;
  background: none;
  outline: none;
  right: 2rem;
  transform: translate(0,calc(-100% + 4px));
  margin-bottom: -40px;
  cursor: pointer;
  margin-top:1rem;
  >svg:last-child{
    transform: translate(0px,0px);
    transition: transform 0.3s; 
  }
  :hover{
    >svg:last-child{
      transform: translate(3px,3px);
    }
  }
`