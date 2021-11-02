import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  padding: ${p=>p.theme.layout==='mobile'?
    css`1rem 2rem`:
    css`1rem 0rem`
  };
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  >span{
    >span{
      >svg{
        margin-right: 1rem;
      }
      ${p=>p.theme.font.title.monobold.h5}
      align-items: center;
      display: flex;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
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
  background-color: red;
  position: relative;
  background-image: url(${p=>p.src});
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  &:before {
    content: "";
    display: block;
    height: 0;
    width: 0;
    padding-bottom: calc(90/123 * 100%);
  }
`