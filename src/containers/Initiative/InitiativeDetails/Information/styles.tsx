import styled from 'styled-components/macro';

export const
Block = styled.div`
  display: flex;
  padding: 1rem 2rem;
  flex-direction: column;
  &:last-child{
    margin-bottom: 1rem;
  }
  >h5:first-child{
    ${p=>p.theme.font.title.monobold.h5}
    display: flex;
    justify-content: start;
    align-items: center;
    >svg{
      margin-right: 1rem;
    }
  }
`