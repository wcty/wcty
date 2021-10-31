import styled, { css } from 'styled-components/macro';
import {ReactComponent as Fillet} from 'assets/icons/fillet.svg'
import {ReactComponent as ArrowUp} from 'assets/icons/arrow-up.svg'

export const 

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
`
