import styled, { css } from "styled-components/macro";
import {ReactComponent as Checkmark} from "assets/icons/checkmark.svg";

interface CheckboxProps {
  checked: boolean;
  onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
}

const Checkbox = styled.label.attrs((p:CheckboxProps)=>({
  value: p.value,
  disabled: p.disabled,
  onChange: p.disabled?()=>{}:p.onChange,
  children:
    <>
      <input 
        type="checkbox" 
        checked={p.checked} 
        readOnly
        value={p.value} />
      <span>
        <Checkmark />
      </span>
    </>
}))<{checked:boolean}>`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  transition: background-color 0.2s, border 0.2s;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  margin: 0.5rem 1rem 0.5rem 0;
  ${p=>p.disabled?
    css<{checked:boolean}>`
      background-color: ${p => p.checked ? "#938D86" : "white"};
      border: ${p => p.checked ? "#938D86" : p.theme.colors.line} 0.5px solid;
    `:
    css<{checked:boolean}>`
      background-color: ${p => p.checked ? "black" : "white"};
      border: ${p => p.checked ? "black" : p.theme.colors.line} 1px solid;
      :hover{
        background-color: ${p => p.checked ? p.theme.colors.secondary : "white"};
        border: ${p=>p.theme.colors.secondary} 1px solid;
      }
    `
  }

  >input{
    display: none;
    position: absolute;
  }
  >span{
    display: ${p=>p.checked ? "flex" : "none"};
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    >svg{
      flex: 1 1 auto;
      width: 10px;
      height: 10px;
    }
  }
`

export default Checkbox;