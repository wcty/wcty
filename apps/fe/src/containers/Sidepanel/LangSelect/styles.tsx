import { ReactElement, useState } from 'react';
import styled from 'styled-components'

const 
SelectComponent = styled.select`
  display: none;
  color: white;  
`,

Selected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  width: 100%;
  height: 100%;
  span{
    transform: translate(0px,0px);
    transition: transform 0.5s;

    :after {
      content: "▼";
      position: relative;
      margin-left: 8px;
      margin-bottom: 6px;
      cursor: pointer;
    } 
  }
  :hover{
    background-color: #242424;
    span{
      transform: translate(2px,2px);
    }
  }
`,

Options = styled.div`
  color: white;
  position: absolute;
  bottom: 0px;
  width: 100%;
  div {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    background-color: #030303;
    span{
      transform: translate(0px,0px);
      transition: transform 0.5s;
    }
  }
  div:first-child {
    padding: 16px 0px 10px 0px;
  }
  div:last-child {
    padding: 10px 0px 16px 0px;
  }
  div:hover {
    background-color: #222222;
    span{
      transform: translate(2px,2px);
    }
  }
`;

export const Select = function(
    props: React.DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>, 
      HTMLSelectElement
    >
  ):ReactElement {

  const [open, setOpen] = useState(false)

  return <>
    <SelectComponent value={props.value} onChange={props.onChange}>
      {props.children}
    </SelectComponent>
    { open? 
      <Options onMouseLeave={()=>setOpen(false)}>
        {(props.children as ReactElement[]).map((v,key)=>
          <div key={key} onClick={
            ()=> {
              props?.onChange &&
              props.onChange({target:{value:v.props.value}} as any);
              setOpen(!open)
            }
          }>
            <span>{v.props.children}</span>
          </div>
        )}
      </Options>:
      <Selected onClick={()=>setOpen(!open)}>
        <span>{(props.children as ReactElement[])
            .find(v=>v.props.value===props.value)?.props.children}</span>
      </Selected>
    }
  </>
}