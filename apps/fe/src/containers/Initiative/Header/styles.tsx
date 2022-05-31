import styled, { css } from 'styled-components';

export const 
Header = styled.div`
  width: 100%;
  display: flex;
  font-weight: lighter;
  div{
    ${p=>p.theme.font.body.regular.t5}
  }
  ${p=>p.theme.layout==='mobile'?
    css<{}>`
      align-items: flex-start;
      padding: 2rem;
      flex-direction: column;`:
    css<{}>`
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid black;`
  }
`,

MenuSection = styled.div`
${p=>p.theme.layout==='desktop'?
  css<{}>`
    display: flex;
    border-bottom: 1px solid black;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    >div{
      display: flex;
      height: 100%;
    }
  `:
  css<{}>`
    display: flex;
    position: fixed; 
    bottom:0; 
    width: 100vw;
    z-index: 1;
    background: white;
    height: 45px;
    justify-content: space-evenly;
  `}
`,

MenuButton = styled.div<{active?:boolean}>`
  height: 100%;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover{
    background-color: rgba(0,0,0,0.1);
  }
  ${p=>p.active && css<{}>`border-bottom: 4px solid black;`}
`,

ShareJoin = styled.div`
  display: flex;
  border-radius: 3px;
  overflow: hidden;  
  align-items: center;
  >button{
    ${p=>p.theme.font.body.semibold.t4}
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
    ${p=>p.theme.layout==='mobile' && css<{}>`max-width: 450px;`}
  }
  >button:first-child{
    background-color: white;
    color: black;
    border: none;
    border-radius: 3px 0px 0px 3px;
    max-width: 50%;
  }
  >button:last-child{
    background-color: black;
    color: white;
    border-radius: 0px 3px 3px 0px;
    max-width: 50%;
  }
  ${p=>p.theme.layout==='mobile'?
    css<{}>`
      padding: 0rem 2rem;
      flex: 1 1 auto;
      line-height: 40px;
      >button:only-child{
        position: relative;
        margin-left: auto;
        background-color: black;
        color: white;
        max-width: 50%;
        border-radius: 3px 3px 3px 3px;
      }`:
    css<{}>`
      min-width: 284px;
      height: 40px;`}
`,

MetricsRow = styled.div`
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
  margin-right: 0.4rem;
`,

Stats = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 24px;
  > * {
    ${p=>p.theme.font.body.regular.t5}
    margin-right: 2rem;
  }
`,

Member = styled.img`
  width: 30px;
  height: 30px;
  position: relative;
  border-radius: 50%;
  background-color: ${p=>p.theme.colors.primary};
  :not(:first-child){
    margin-left: -15px;
  }
`,

MembersContainer = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 30px; 
  margin-right: 1rem;
  ${p=>p.theme.layout==='mobile' ? 
    css<{}>`margin-top: -3px;`:
    css<{}>`margin-top: -10px;`}
  cursor: pointer;
`
