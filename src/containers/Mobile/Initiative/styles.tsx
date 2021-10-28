import styled from 'styled-components';
import {ReactComponent as Fillet} from 'assets/icons/fillet.svg'
import {ReactComponent as ArrowUp} from 'assets/icons/arrow-up.svg'

export const 
Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${p=>p.theme.colors.primary};
  >img:first-child{
    object-fit: cover;
    width: 100%;
    height: 148px;
  }
`,

Metrics = styled.div`
  flex: 1 1 auto;
  height: 50px;
  padding: 2rem;
  align-items: center;
  display: flex;
  font-weight: lighter;
  white-space: nowrap;
  color: #383838;
  white-space: nowrap;
  border-bottom: 1px solid #000000;
  div{
    ${p=>p.theme.font.body.regular.t5}
  }
  div:first-child{
    margin-right: 2rem;
  }
`,

Icon = styled.span`
  margin-right: 0.2rem;
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
`,

Header = styled.div`
  padding: 2rem;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  font-weight: lighter;
  div{
    ${p=>p.theme.font.body.regular.t5}
  }
`,

ShareJoin = styled.div`
  padding: 2rem;
  flex: 1 1 auto;
  line-height: 40px;
  display: flex;
  border-radius: 3px;
  overflow: hidden;
  >div{
    ${p=>p.theme.font.body.semibold.t4}
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
  }
  >div:first-child{
    background-color: white;
    color: black;
  }
  >div:last-child{
    background-color: black;
    color: white;
  }
`,

InitiativeDescription = styled.div<{open:boolean}>`
  flex: 1 1 auto;
  line-height: 40px;
  display: flex;
  border-radius: 3px;
  overflow: hidden;
  >span{
    padding: 2rem;
  }
`