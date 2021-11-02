import styled from 'styled-components/macro';

export const 
Header = {
  Mobile: styled.div`
    padding: 2rem;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    display: flex;
    font-weight: lighter;
    div{
      ${p=>p.theme.font.body.regular.t5}
    }
  `,
  Desktop: styled.div`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
    font-weight: lighter;
    border-bottom: 1px solid black;
    div{
      ${p=>p.theme.font.body.regular.t5}
    }
  `,
},

ShareJoin = {

  Desktop: styled.div`
    width: 254px;
    min-width: 254px;
    height: 40px;
    display: flex;
    border-radius: 3px;
    overflow: hidden;
    
    >div{
      ${p=>p.theme.font.body.semibold.t4}
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 1 auto;
    }
    >div:first-child{
      background-color: white;
      color: black;
    }
    >div:last-child{
      background-color: black;
      color: white;
    }
  `,

  Mobile: styled.div`
    padding: 0rem 2rem;
    flex: 1 1 auto;
    line-height: 40px;
    display: flex;
    border-radius: 3px;
    overflow: hidden;
    
    >div{
      ${p=>p.theme.font.body.semibold.t4}
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 1 auto;
    }
    >div:first-child{
      background-color: white;
      color: black;
    }
    >div:last-child{
      background-color: black;
      color: white;
    }
  `
},

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
  margin-right: 0.2rem;
`,

Stats = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 24px;
  > * {
    ${p=>p.theme.font.body.regular.t5}
    margin-right: 2rem;
  }
`
