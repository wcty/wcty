import styled from 'styled-components/macro'
import { Popup as PopupUnstyled } from '@urbica/react-map-gl'

export const Popup = styled(PopupUnstyled)`
  background: none;
  background-color: none;
  box-shadow: none;
  border-radius: none;
  border: none;
  .mapboxgl-popup-content {
    border-radius: none;
    border: none;
    width: 290px;
    height: 100px;
    overflow: hidden;
    display: block;
    background-color:#fff;
    text-align: left;
    position: absolute;
    right: 5px;
    bottom: 0px;
    padding: 0px;
    margin: 0px;
  }
  div.mapboxgl-popup-content > div {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
  .mapboxgl-popup-tip {
    border-top-color: rgba(255,255,255,0);
  }
  .mapboxgl-popup-close-button {
    display: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`,

Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`,

Content = styled.div`
  flex: 1 1 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`,

TopBar = styled.div`
  height: 32px;
  widows: 100%;
  border-bottom: solid 1px black;
  display: flex;
`,

Icon = styled.span`
  margin-right: 0.2rem;
`,

Metrics = styled.div`
  flex: 1 1 auto;
  padding: 0 0.5rem;
  align-items: center;
  display: flex;
  font-size: 10px;
  font-weight: lighter;
  color: #383838;
  white-space: nowrap;
  div:first-child{
    margin-right: 0.5rem;
  }
`,

Button = styled.div`
  flex: 0 0 32px;
  border-left: solid 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover{
    div{
      transform: rotate(45deg) translate(2.2px,2.2px);
    }
  }
  div{
    width: 9px;
    height: 9px;
    transform: rotate(45deg) translate(1px,1px);
    border-top: solid 1px black;
    border-left: solid 1px black;
    transition: transform 0.5s;

  }
`,

BottomPanel = styled.div`
  padding: 0.5rem;
  line-height: 1rem;
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  span {
    cursor: pointer;
  }
`
