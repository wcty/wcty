import styled, {css} from 'styled-components'

const theme = {
  colors:{
    titleActive: '#010202',
    body: '#45494F',
    label: '#84898F',
    placeholder: '#B1B8C1',
    line: '#D9DFE4',
    backgroundActive: '#F0F4F8',
    backgroundLight: '#F7F9FB',
    backgroundLigher: '#F7F9FB',
    primary: '#F4EADE',
    primaryAccent: '#FCF8F4',
    secondary: '#174AFF',
    secondaryAccent: '#002FD3',
    error: '#E04F4F',
    success: '#52AD92',
    warning: '#E5B049'
  },
  typography:{
    // header: css`font: 6em sans-serif;`
  }
} as const

export default theme