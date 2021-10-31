import styled from 'styled-components/macro';

export const
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
`