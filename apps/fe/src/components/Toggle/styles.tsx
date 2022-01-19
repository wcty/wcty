import styled, {css} from 'styled-components'

interface ISliderProps {
    toggle: boolean
}



export const Slider = styled.span<ISliderProps>`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0; 
    bottom: 0;
    background-color: ${({ toggle, theme }) => toggle ? 'rgba(23, 74, 255, .38)' : 'rgba(132, 137, 143, .38)'};
    border-radius: 7px;
    transition: 0.4s;

    &:hover {
        background-color: ${({ toggle, theme }) => toggle ? 'rgba(0, 47, 211, .38)' : 'rgba(1, 2, 2, .38)'};

    }
    

    &:before {
    content: '';
    position: absolute;
    top: -3.5px;
    left: 0px;
    bottom: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ toggle, theme }) => toggle ? theme.colors.secondary : theme.colors.label};
    transition: 0.4s;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);

  }

  &:hover::before {
        background-color: ${({ toggle, theme }) => toggle ? theme.colors.secondaryAccent : theme.colors.titleActive};
    }
`

export const Input = styled.input`
    
    &:checked + ${Slider}:before {
        transform: translateX(20px);
        
    } 
`


export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 14px;
  background-color: white;
  border-radius: 7px;
  

  & ${Input} {
    opacity: 0;
    width: 0;
    height: 0;
  }
`