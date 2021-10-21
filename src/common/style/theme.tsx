import styled, {css as css_, ThemedCssFunction} from 'styled-components'

const css = css_ as ThemedCssFunction<{}>

export const theme = {
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
  } ,
  font:{
    title:{
      mono: (()=>{
        const font = css<{}>`
          font-family: 'IBM Plex Mono', monospace;
          color: black;
          font-weight: 400;
          opacity: 0.87;
        `;
        return ({
          h1: css<{}>`${font}; font-size: 30px;`,
          h2: css<{}>`${font}; font-size: 24px;`,
          h3: css<{}>`${font}; font-size: 18px;`,
          h4: css<{}>`${font}; font-size: 14px;`,
          h5: css<{}>`${font}; font-size: 11px;`,
        })
      })(),

      monobold: (()=>{
        const font = css<{}>`
          font-family: 'IBM Plex Mono', monospace;
          color: black;
          font-weight: 600;
          opacity: 0.87;
        `;
        return ({
          h1: css<{}>`${font}; font-size: 30px;`,
          h2: css<{}>`${font}; font-size: 24px;`,
          h3: css<{}>`${font}; font-size: 18px;`,
          h4: css<{}>`${font}; font-size: 14px;`,
          h5: css<{}>`${font}; font-size: 11px;`,
        })
      })(),
    } ,
    body:{
      regular: (()=>{
        const font = css<{}>`
          font-family: 'Montserrat', sans-serif;
          color: black;
          font-weight: 400;
          opacity: 0.87;
        `;
        return ({
          t1: css<{}>`${font}; font-size:18px;`,
          t2: css<{}>`${font}; font-size:16px;`,
          t3: css<{}>`${font}; font-size:14px;`,
          t4: css<{}>`${font}; font-size:12px;`,
          t5: css<{}>`${font}; font-size:10px;`,
        })
      })(),

      semibold: (()=>{
        const font = css<{}>`
          font-family: 'Montserrat', sans-serif;
          color: black;
          font-weight: 600;
          opacity: 0.87;
        `;
        return ({
          t1: css<{}>`${font}; font-size:18px;`,
          t2: css<{}>`${font}; font-size:16px;`,
          t3: css<{}>`${font}; font-size:14px;`,
          t4: css<{}>`${font}; font-size:12px;`,
          t5: css<{}>`${font}; font-size:10px;`,
        })
      })()
    } 
  } 
} 