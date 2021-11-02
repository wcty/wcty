import styled from 'styled-components/macro'

export const
Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  padding: 2rem;
  border-radius: 3px;
  min-height: 200px;
  ${p=>p.theme.shadow}
  >div{
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
  }
`