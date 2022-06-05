import styled, { css } from 'styled-components'


export const
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
  ${p=>p.theme.layout==='mobile' && css`
    flex: 1 1 100%;
    padding: 4rem 2rem;
    margin: 1rem 0 1rem 0;
  `}
`