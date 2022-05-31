import styled, { css } from "styled-components";
import { position, layout, space, SpaceProps, PositionProps, LayoutProps, flexbox, FlexboxProps } from 'styled-system'
export interface ButtonProps  {
  s?: 'small' | 'medium' | 'large'
  t?: 'primary' | 'secondary' | 'outlined' | 'subtle' | 'text'
}

export const Button = styled.button<ButtonProps & FlexboxProps & PositionProps&SpaceProps&LayoutProps>`
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
  ${({t = 'primary', theme})=>theme.buttonTypes[t]};
  ${({s = 'medium', theme})=> theme.buttonSizes[s]};
  ${position}
  ${layout}
  ${space}
  ${flexbox}
`;