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
    margin-top:3rem;
    text-align: start;
    >div{
      display: flex;
      flex-direction: column;
    }
  `}
  min-height: 3rem;
  border-bottom: 1px solid black;
  display: flex;
  

`,

Toolbox = styled.div`
  width: 100%;
  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  >div{
    margin: 1rem 0;
    display: flex;
  }
  ${p=>p.theme.layout==='mobile'?
  css`
    display: block;
    padding: 2rem 2rem 0rem 2rem;
    .search{
      width: 100%; 
      height: 3rem;
    }
  `:
  css`
    display: flex;
    .search{
      width: 310px; 
      height: 3rem;
    }
  `}
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

Grid = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  gap: 10px;
  position: relative;
  padding-bottom: 3rem;
  overflow: visible;
  margin-top: 1rem;
  ${p=>p.theme.layout==='mobile'?
  css`
    grid-template-columns: repeat(1, 1fr);
  `:
  css`
    grid-template-columns: repeat(3, 1fr);
  `}
`,

Tile = styled.div`
  width: 100%;
  height: 85px;
  cursor: pointer;
  :hover{
    background-color: ${p=>p.theme.colors.backgroundActive};
  }
  display: flex;
  >img{
    border-radius: 50%;
    margin-right: 1rem;
  }
  >div{
    display: flex;
    flex-direction: column;
  }
  ${p=>p.theme.layout==='mobile'?
  css`
    padding: 1rem 2rem;
  `:
  css`
    padding: 1rem;
  `}
`