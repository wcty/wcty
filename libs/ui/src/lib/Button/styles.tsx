import styled, { css } from "styled-components";
import { position, layout, space, SpaceProps, PositionProps, LayoutProps } from 'styled-system'
export interface ButtonProps  {
  customSize?: 'small' | 'medium' | 'large'
  customType?: 'primary' | 'secondary' | 'outlined' | 'subtle' | 'text'
}

export const Button = styled.button<ButtonProps&PositionProps&SpaceProps&LayoutProps>`
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
  ${({customType = 'primary', theme})=>theme.buttonTypes[customType]};
  ${({customSize = 'medium', theme})=> theme.buttonSizes[customSize]};
  ${position}
  ${layout}
  ${space}
`;