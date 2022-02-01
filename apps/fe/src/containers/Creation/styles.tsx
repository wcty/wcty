import styled, {css} from 'styled-components';
import Placeholder from '@assets/icons/cover-placeholder.svg';
import { InputHTMLAttributes } from 'react';
import { ReactComponent as Cross } from '@assets/icons/cross.svg'

export const 
FloatingContainer = styled.div`
  border-radius: 3px;
  left: 2rem;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  background-color: white;
  padding: 2rem;
  ${p=>p.theme.layout==='mobile'?
    css<{}>`
      width: calc(100% - 4rem);`:
    css<{}>`
      width: 320px;
      left: 50%;
      transform: translate(-50%, -50%);
      `}
  ${p=>p.theme.shadow}
  ${p=>p.theme.font.body.regular.t4}

  >button{
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    background: none;
    border: none;
    outline: none;
    margin: none;
    padding: none;
    >svg{
      transform: rotate(45deg);
    }
  }
  >div:nth-child(2){
    ${p=>p.theme.font.body.regular.t4}
    line-height: 2rem;
    margin-top: 3rem;
  }
  >div:last-child{
    ${p=>p.theme.font.body.regular.t4}
    display: flex;
    >button{
      flex: 1 1 auto;
      justify-content: center;
      &:first-child{
        margin-right: 1rem;
      }
    }
    margin-top:2rem;
    margin-bottom: 1rem;
  }
`, 

FileInput = styled.label.attrs(
  (p:{
    src?:string,
    $onInputChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    disabled?:boolean,
  }&InputHTMLAttributes<HTMLInputElement>)=>({
    $onInputChange:p.$onInputChange,
    disabled:p.disabled,
    ariaDisabled:p.disabled,
    children: <><input type="file" onChange={p.$onInputChange} /><div><Cross/>{p.title}</div></>
}))<{src?:string}>`
  width: 100%;
  height: 150px;
  border: none;
  outline: none;
  box-shadow: none;
  background-image: url(${p=>p.src? p.src: Placeholder});
  background-size: contain;
  background-position: ${p=>p.src? css`center`: css`left bottom`};
  background-repeat: no-repeat;
  background-color: #f0f4f8;
  border-radius: 3px;
  position: relative;
  ${p=>p.disabled && css`
    pointer-events: none;
    cursor: none;
  `}
  >input[type="file"]{
    display: none;
  }
  >div{
    height: 32px;
    background-color: white;
    border-radius: 3px;
    position: absolute;
    bottom:1rem;
    right:1rem;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    ${p=>p.theme.font.body.semibold.t5}
    ${p=>p.theme.shadow}
    transform: translate(0px,0px);
    transition: transform 0.3s ease-in-out;
    ${p=>p.disabled?
      css`
        color: ${p=>p.theme.colors.label} !important;
        >svg{
          fill: ${p=>p.theme.colors.label} !important;
        }
      `:
      css`&:hover{ transform: translate(3px,3px); }`}
    >svg{
      height: 14px;
      margin: 0.5rem;
      margin-right: 1rem;
    }
  }
`,

CreationContainer = styled.div`
  ${p=>p.theme.layout==='mobile'?
    css<{}>`
      bottom: 0;
      width: 100%;
      min-height: 190px;`:
    css<{}>`
      top:2rem;
      right:2rem;
      width: 320px;`}
  display: flex;
  flex-direction: column;
  align-items: space-between;
  position: absolute;
  background-color: white;
  padding: 2rem;
  >div:nth-child(2) >input{
    margin-bottom: 1.5rem;
  }
  >div:first-child{
    margin-bottom: 1.5rem;
  }
  >div{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  >div:last-child{
    margin-top: 1.5rem;
    justify-content: none;
    >button:last-child{
      flex: 1 1 auto;
      margin-left: 1rem;
    }
  }
`,

LocationCard = styled.div`
  min-height: 4rem;
  padding: 1rem;
  background-color: ${p=>p.theme.colors.backgroundActive};
  cursor: pointer;
  >span{
    height: 100%;
    display: flex;
    align-items: center;
    >:last-child{
      margin-left: 1rem;
    }
  }
`,

Center = styled.div`
  position: fixed;
  top: calc(50% - 37px);
  left: 50%;
  transform: translate(-50%, 0);
`