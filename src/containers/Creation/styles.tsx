import styled, {css} from 'styled-components';
import Placeholder from 'assets/icons/cover-placeholder.svg';
import { InputHTMLAttributes } from 'react';
import { ReactComponent as Cross } from 'assets/icons/cross.svg'

export const 
FloatingContainer = styled.div`
  width: calc(100% - 4rem);
  ${p=>p.theme.shadow}
  ${p=>p.theme.font.body.regular.t4}
  border-radius: 3px;
  left: 2rem;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  background-color: white;
  padding: 2rem;
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
    justify-content: space-between;
    margin-top:2rem;
    margin-bottom: 1rem;
  }
`, 

FileInput = styled.label.attrs(
  (p:{
    src?:string,
    onInputChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void
  }&InputHTMLAttributes<HTMLInputElement>)=>({
    onInputChange:p.onInputChange,
    children: <><input type="file" onChange={p.onInputChange} /><div><Cross/>{p.title}</div></>
}))<{src?:string}>`
  width: 100%;
  height: 150px;
  border: none;
  outline: none;
  box-shadow: none;
  background-image: url(${p=>p.src? p.src+'?w=150&h=300&q=90': Placeholder});
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  position: relative;
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
    &:hover{
      transform: translate(3px,3px);
    }
    >svg{
      height: 14px;
      margin: 0.5rem;
      margin-right: 1rem;
    }
  }
`,

BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 190px;
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
  position: absolute;
  top: calc(50% - 37px);
  left: 50%;
  transform: translate(-50%, 0);
`