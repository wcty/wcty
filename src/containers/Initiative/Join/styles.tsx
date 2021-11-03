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

`,

Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 385px;
  >h3{
    margin-top: 4.5rem;
  }
  >div{ 
    ${p=>p.theme.font.body.regular.t4}
    display: flex;
    margin: 1rem 0;
    align-items: center;
    &:last-child{
      margin-top:2rem;
      margin-bottom: 4rem;
    }
  }
  input, textarea{
    ${p=>p.theme.font.body.regular.t5}
  }
`,

DonationMenu = styled.div`
  margin-top: 0 !important;
  >input{
    max-width: 200px;
  }
`,

TaskSelection = styled.div`
  margin: 0 0 0 2.6rem !important;
  display: flex;
  flex-direction: column;
  align-items: start !important;
  >span:first-child{
    margin-bottom: 0.5rem;
  }
  >span{
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: end;
  }
`