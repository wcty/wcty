import styled, { css } from 'styled-components'


export const
Header = styled.div`
  width: 100%;
  ${p=>p.theme.layout==='mobile'?
  css`
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
`,

AccountSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 50px;
  flex: 1 1 30%;
`,

InitiativeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 40%;
  background-color: ${p=>p.theme.colors.backgroundLighter};
  border-radius: 3px;
`,

ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  height: fit-content;
  flex: 1 1 30%;
  margin: 0 25px 0 25px;
  border-radius: 3px;
  padding: 4rem 2rem;
  background-color: ${p=>p.theme.colors.backgroundLighter};
  >div{
    height: 3rem;
  }
  svg{
    margin-right: 1rem;
  }
`,

Avatar = styled.div<{src:string}>`
  border-radius: 50%;
  background-color: #f5f5f5;
  margin-bottom: 2rem;
  background-image: url(${p=>p.src});
  background-size: contain;
  height:0;
  width:100%;
  padding-bottom:100%;
  background-color:red;
`