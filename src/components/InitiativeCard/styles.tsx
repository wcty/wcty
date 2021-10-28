import styled from 'styled-components/macro'
import { Popup as PopupUnstyled } from '@urbica/react-map-gl'

export const Card = styled.div`
  border-radius: none;
  border: none;
  overflow: hidden;
  display: flex;
  background-color:#fff;
  text-align: left;
  position: relative;
  border-radius: 3px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  cursor: pointer;
`,

Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 3px 0 0 3px;
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
  padding: 0 0 0 0.5rem;
  align-items: center;
  display: flex;
  font-size: 10px;
  font-weight: lighter;
  white-space: nowrap;
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
