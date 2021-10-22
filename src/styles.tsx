

import styled, { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyle = createGlobalStyle`
  * {
    /* ${props=>props.theme.font.body.regular.t5} */
    font-family: 'IBM Plex Mono', 'Montserrat','Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
    box-sizing: border-box;
    font-size: 12px;
  }
  h1{
    ${props=>props.theme.font.title.mono.h1}
  }
  h2{
    ${props=>props.theme.font.title.mono.h2}
  }
  h3{
    ${props=>props.theme.font.title.mono.h3}
  }
  h4{
    ${props=>props.theme.font.title.mono.h4}
  }
  h5{
    ${props=>props.theme.font.title.mono.h5}
  }
  span{
    ${props=>props.theme.font.body.regular.t5}
  }
  html {
    overflow: scroll;
    overflow: hidden;
  }
  ::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  canvas {
    outline: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0); /* mobile webkit */
  }

  p::-moz-selection { background-color: lightgrey}
  p::selection { background-color: lightgrey; }
  input::-moz-selection { background-color: lightgrey}
  input::selection { background-color: lightgrey; }
  div.mapboxgl-popup-content{
    box-shadow: none;
    background: none;
  }
`,

AppWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
