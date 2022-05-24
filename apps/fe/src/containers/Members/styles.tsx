import styled from 'styled-components'


export const
Header = styled.div`
  width: 100%;
  margin-top:3rem;
  min-height: 3rem;
  border-bottom: 1px solid black;
  display: flex;
  text-align: start;
  >div{
    display: flex;
    flex-direction: column;
  }
`,

Toolbox = styled.div`
  width: 100%;
  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  padding:1rem 0;
  >div{
    display: flex;
  }
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
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  position: relative;
  padding-bottom: 3rem;
  overflow: visible;
  margin-top: 1rem;
`,

Tile = styled.div`
  width: 100%;
  height: 85px;
  cursor: pointer;
  padding: 1rem;
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
`