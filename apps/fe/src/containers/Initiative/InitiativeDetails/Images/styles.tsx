import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: ${p=>p.theme.layout==='mobile'?
    css`1rem 2rem`:
    css`1rem 0rem`
  };
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  >button{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    border: none;
    background: none;
    width: 100%;
    >span{
      border: none;
      background: none;
      transition: transform 0.2s;
      cursor: pointer;
      >svg{
        margin-right: 1rem;
      }
      ${p=>p.theme.font.title.monobold.h5}
      align-items: center;
      display: flex;
    }
    &:hover{
      >span{
        transform: translate(2px,2px);
      }
    }
  }
`,

ShowAll = styled.button`
  border: none;

`,

Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 1rem;
  position: relative;
`,

Img = styled.div.attrs((p:{src:string, alt:string})=>({
  src: p.src,
  alt: p.alt,
}))`
  position: relative;
  background-image: url(${p=>p.src});
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  cursor: pointer;
  &:before {
    content: "";
    display: block;
    height: 0;
    width: 0;
    padding-bottom: calc(90/123 * 100%);
  }
  :hover{
    opacity: 0.975;
  }
`