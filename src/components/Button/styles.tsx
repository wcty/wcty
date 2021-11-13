import styled, {css} from "styled-components";
import { variant} from 'styled-system'


const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes'
});


const buttonType = variant({
  prop: 'customType',
  key: 'buttonTypes'
})

export interface IButtonProps  {
  size?: 'small' | 'medium' | 'large',
  customType?: 'primary' | 'secondary' | 'subtle' | 'text'
}



export const Button = styled.button<IButtonProps>`
  border: 0;
  outline: 0;
  display: flex;
  //justify-content: center;
  align-items: center;
  border: none;
  padding: 0 15px;
  cursor: pointer;
  border-radius: 3px;
  ${props => props.theme.font.body.semibold.t4};
  ${buttonType};
  ${buttonSize};
`;

Button.defaultProps = {
    size: 'medium',
    customType: 'primary'
  }


