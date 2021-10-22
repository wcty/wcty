import styled, {css as css_, ThemedCssFunction} from 'styled-components'

const css = css_ as ThemedCssFunction<{}>

export const theme = {
  colors:{
    titleActive: '#010202',
    body: '#45494F',
    label: '#84898F',
    placeholder: '#B1B8C1',
    line: '#D9DFE4',
    backgroundTransparent: 'transparent',
    backgroundActive: '#F0F4F8',
    backgroundDark:'#010202',
    backgroundLight: '#F7F9FB',
    backgroundLighter: '#FFF',
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
          font-weight: 400;
          opacity: 0.87;
        `;
        return ({
          /** font-size: 30 */
          h1: css<{}>`${font}; font-size: 30px;`,
          /** font-size: 24 */
          h2: css<{}>`${font}; font-size: 24px;`,
          /** font-size: 18 */
          h3: css<{}>`${font}; font-size: 18px;`,
          /** font-size: 14 */
          h4: css<{}>`${font}; font-size: 14px;`,
          /** font-size: 11 */
          h5: css<{}>`${font}; font-size: 11px;`,
        })
      })(),

      monobold: (()=>{
        const font = css<{}>`
          font-family: 'IBM Plex Mono', monospace;
          font-weight: 600;
          opacity: 0.87;
        `;
        return ({
          /** font-size: 30 */
          h1: css<{}>`${font}; font-size: 30px;`,
          /** font-size: 24 */
          h2: css<{}>`${font}; font-size: 24px;`,
          /** font-size: 18 */
          h3: css<{}>`${font}; font-size: 18px;`,
          /** font-size: 14 */
          h4: css<{}>`${font}; font-size: 14px;`,
          /** font-size: 10 */
          h5: css<{}>`${font}; font-size: 11px;`,
        })
      })(),
    } ,
    body:{
      regular: (()=>{
        const font = css<{}>`
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          opacity: 0.87;
        `;
        return ({
          /** font-size: 18 */
          t1: css<{}>`${font}; font-size:18px;`,
          /** font-size: 18 */
          t2: css<{}>`${font}; font-size:16px;`,
          /** font-size: 14 */
          t3: css<{}>`${font}; font-size:14px;`,
          /** font-size: 12 */
          t4: css<{}>`${font}; font-size:12px;`,
          /** font-size: 10 */
          t5: css<{}>`${font}; font-size:10px;`,
        })
      })(),

      semibold: (()=>{
        const font = css<{}>`
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          opacity: 0.87;
        `;
        return ({
          /** font-size: 18 */
          t1: css<{}>`${font}; font-size:18px;`,
          /** font-size: 16 */
          t2: css<{}>`${font}; font-size:16px;`,
          /** font-size: 14 */
          t3: css<{}>`${font}; font-size:14px;`,
          /** font-size: 12 */
          t4: css<{}>`${font}; font-size:12px;`,
          /** font-size: 10 */
          t5: css<{}>`${font}; font-size:10px;`,
        })
      })()
    } 
  } 
} 