import styled, { css } from 'styled-components'


export const
Header = styled.div`
  width: 100%;
  ${p=>p.theme.layout==='mobile'?
  css`
    margin-top:2rem;
    padding: 0 2rem;
    text-align: center;
    >div{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `:
  css`
    margin-top:4rem;
    text-align: start;
    >div{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `}
  min-height: 3rem;
  display: flex;
`,

ButtonBack = styled.button.attrs({
  children: <div/>,
})`
  >div{
    transform: rotate(45deg);
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    width: 12px;
    height: 12px;
  }
  border: none;
  width: 46px;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  :hover{
    transform: translate(2.2px,2.2px);
  }
`,

Content = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin-top: 4rem;
  ${p=>p.theme.layout==='mobile' && css`
    flex-direction: column;
    margin-top: 2rem;
  `}
`,

TextWrapper = styled.div`
  ${p=>p.theme.layout==='mobile' && css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto; 
    margin-right: 46px;
  `}
`