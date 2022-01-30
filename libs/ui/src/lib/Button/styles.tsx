import { ElementArgs, ElementProps } from "common";
import styled, { css } from "styled-components";

export interface ButtonProps  {
  size?: 'small' | 'medium' | 'large',
  customType?: 'primary' | 'secondary' | 'subtle' | 'text'
}

export const Button = styled.button<ButtonProps & ElementProps>`
  border: 0;
  outline: 0;
  display: flex;
  //justify-content: center;
  align-items: center;
  border: none;
  padding: 0 15px;
  cursor: pointer;
  border-radius: 3px;
  >svg:first-child{
    margin-right: 5px;
  }
  >svg:last-child{
    margin-left: 5px;
  }
  ${props => props.theme.font.body.semibold.t4};
  ${p=>p.theme.buttonTypes[p.customType||'primary']};
  ${p=>p.theme.buttonSizes[p.size||'medium']};
  ${ElementArgs}
`;