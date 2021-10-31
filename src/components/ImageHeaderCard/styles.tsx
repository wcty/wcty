import styled from "styled-components/macro";
import {ReactComponent as Fillet} from 'assets/icons/fillet.svg'
import {ReactComponent as ArrowUp} from 'assets/icons/arrow-up.svg'

export const 
Image = styled.img`
    width: 960px;
`,

Content = styled.div``,

Info =  styled.div``,

Title = styled.h2``,

Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px ${props => props.theme.colors.titleActive};
    border-style: solid none;
    padding: 10px 0;
`,

Buttons = styled.div`
    display: flex;
    flex-direction: row;
`,

Icons  =  styled.div`
    display: flex;
    flex-direction: row;
`,

ArrowUpIcon = styled(ArrowUp)`
  position: absolute;
  left: 17px;
  top: 10px;
`,

FilletButton = styled.button.attrs({
  children: <><Fillet/><ArrowUpIcon/></>
})`
  position: absolute;
  top: 148px;
  padding: 0;
  border: none;
  background: none;
  outline: none;
  right: 2rem;
  transform: translate(0,calc(-100% + 4px));
  margin-bottom: -40px;
`
