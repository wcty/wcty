import styled from 'styled-components'
import { Popup as PopupUnstyled } from '@urbica/react-map-gl'

export const Popup = styled(PopupUnstyled)`
  background: none;
  background-color: none;
  box-shadow: none;
  border-radius: none;
  border: none;
  &div.mapboxgl-popup-content{
    box-shadow: none;
  }
  .mapboxgl-popup-content > div {
    border-radius: none;
    border: none;
    width: 290px;
    height: 100px;
    overflow: hidden;
    display: block;
    background-color: none;
    text-align: left;
    position: absolute;
    box-shadow: none;
    right: 0px;
    bottom: 0px;
    padding: 0px;
    margin: 0px;
  }
  div.mapboxgl-popup-content > div >div {
    display: flex;
    flex-direction: row;
    height: 100%;
    box-shadow: none;
  }
  .mapboxgl-popup-tip {
    border-top-color: rgba(255,255,255,0);
    display: none;
  }
  .mapboxgl-popup-close-button {
    display: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`