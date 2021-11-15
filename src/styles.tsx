

import styled, { createGlobalStyle } from 'styled-components'
import BurgerFab from "containers/FloatPanel/BurgerFab";

export const GlobalStyle = createGlobalStyle`
  #root{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }
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
  a{
    ${props=>props.theme.font.body.semibold.t5}
    color: black;
    text-decoration: none;
    text-transform: none;
  }
  html {
    overflow: hidden;
  }
  body{
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

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`

export const MapWrapper = styled.div`
  top: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
`,

ContentWrapper = styled.div`
  overflow-y: scroll;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.colors.primary}
`,

Burger = styled.div.attrs({
  children: <BurgerFab/>
})`
  position: fixed;
  top: 29px;
  left: 0;
  z-index: 1;
`