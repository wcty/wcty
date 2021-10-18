import styled, { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
    box-sizing: border-box;
    font-size: 12px;
  }
  h2{
    font-weight: 500;
    font-size: 19;
  }
  @import url('https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css');

  html {
    overflow: scroll;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
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
`
export const AppWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
