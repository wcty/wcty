
import { css } from "../css";
import { colors } from "../colors";

export const 
buttonTypes = {
  primary: css`
    background-color: ${colors.titleActive};
    color: ${colors.backgroundLight};
    &:hover{
      background-color: ${colors.secondary};
      >svg{
        fill: ${colors.secondary};
      }
    }
    &:active {
      background-color: ${colors.secondaryAccent};
      >svg{
        fill: ${colors.secondaryAccent};
      }
    }
    &:disabled{
      background-color: ${colors.body};
      >svg{
        fill: ${colors.placeholder};
      }
    }
  `,

  secondary: css`
    background-color: #ffffff;
    color: ${colors.titleActive};
    &:hover{
      background-color: ${colors.backgroundActive};
      color: #174AFF;
      >svg{
        fill: #174AFF;
      }
    }
    &:active {
      background-color: ${colors.backgroundActive};
      color: #002FD3;
      >svg{
        fill: #002FD3;
      }
    }
    &:disabled{
      background-color: #ffffff;
      >svg{
        fill: ${colors.titleActive};
      }
    }
  `,

  outlined: css`
    color: ${colors.titleActive};
    background-color:  ${colors.backgroundTransparent};
    border: 1px solid ${colors.titleActive};
    :hover{
      border-color: ${colors.secondary};
      color: ${colors.secondary};
      >svg{
        fill: ${colors.secondary};
      }
    }
    :active {
      border-color: ${colors.secondaryAccent};
      color: ${colors.secondaryAccent};
      >svg{
        fill: ${colors.secondaryAccent};
      }
    }
    :disabled{
      border-color: ${colors.body};
      color: ${colors.body};
      >svg{
        fill: ${colors.body};
      }
    }
  `,
  
  subtle: css`
    color: ${colors.titleActive};
    background-color:  ${colors.backgroundTransparent};
    border: 1px solid ${colors.placeholder};
    :hover {
      border-color: ${colors.placeholder};
      color: ${colors.secondary};
      >svg{
        fill: ${colors.secondary};
      }
    }
    :active {
      border-color: ${colors.placeholder};
      color: ${colors.secondaryAccent};
      >svg{
        fill: ${colors.secondaryAccent};
      }
    }
    :disabled{
      border-color: ${colors.line};
      color: ${colors.placeholder};
      >svg{
        fill: ${colors.placeholder};
      }
    }
  `,
  text: css`
    color: ${colors.titleActive};
    background-color:  ${colors.backgroundTransparent};
    :hover {
      color: ${colors.secondary};
      >svg{
        fill: ${colors.secondary} !important;
      }
    }
    :active {
      color: ${colors.secondaryAccent};
      >svg{
        fill: ${colors.secondaryAccent} !important;
      }
    }
    :disabled {
      color: ${colors.placeholder};
      >svg{
        fill: ${colors.placeholder} !important;
      }
    }
  `
},

buttonSizes = {
  small: css`
    height: 32px;
    font-size: 10px;
  `,
  medium: css`
    height: 40px;
    font-size: 12px;
  `,
  large: css`
    height: 56px;
    font-size: 14px;
  `
}