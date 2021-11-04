
import {colors} from "../colors";


export const buttonTypes = {
    primary: {
      backgroundColor: colors.titleActive,
      color: colors.backgroundLight,
      '&:hover': {
        backgroundColor: colors.secondary,
      },
      '&:active': {
        backgroundColor: colors.secondaryAccent,
      },
      '&:disabled':{
        backgroundColor: colors.body,
      }
    },
    secondary: {
      color: colors.titleActive,
      backgroundColor:  colors.backgroundTransparent,
      border: `1px solid ${colors.titleActive}`,
      '&:hover': {
        borderColor: colors.secondary,
        color: colors.secondary
      },
      '&:active': {
        borderColor: colors.secondaryAccent,
        color: colors.secondaryAccent
      },
      '&:disabled':{
        borderColor: colors.body,
        color: colors.body
      }
    },
    subtle: {
      color: colors.titleActive,
      backgroundColor:  colors.backgroundTransparent,
      border: `1px solid ${colors.placeholder}`,
      '&:hover': {
        borderColor: colors.placeholder,
        color: colors.secondary
      },
      '&:active': {
        borderColor: colors.placeholder,
        color: colors.secondaryAccent
      },
      '&:disabled':{
        borderColor: colors.line,
        color: colors.placeholder
      }
    },
    text: {
      color: colors.titleActive,
      backgroundColor:  colors.backgroundTransparent,
      '&:hover': {
        color: colors.secondary
      },
      '&:active': {
        color: colors.secondaryAccent
      },
      '&:disabled':{
        color: colors.placeholder
      }
    }
  },

  buttonSizes = {
    small: {
      minWidth: '90px',
      height: '32px',
      fontSize: '10px'
    },
    medium: {
      minWidth: '120px',
      height: '40px',
      fontSize: '12px'
    },
    large: {
      minWidth: '160px',
      height: '56px',
      fontSize: '14px'
    }
  }