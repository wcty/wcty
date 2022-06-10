import styled, { css } from 'styled-components'
import User from '@assets/icons/user.png'

export const
AccountSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${p=>p.theme.layout==='desktop'?
  css`
    padding-right: 50px;
    flex: 1 1 30%;
  `:
  css`
    flex: 1 1 100%;
    margin-bottom: 3rem;
  `}
`,

Avatar = styled.div<{src:string}>`
  border-radius: 50%;
  background-color: #f5f5f5;
  margin-bottom: 2rem;
  background-image: url(${p=>p.src});
  background-size: contain;
  background-color: white;
  height:0;
  ${p=>p.theme.layout==='desktop'?
  css`
    width:100%;
    padding-bottom:100%;
  `:
  css`
    width:33%;
    padding-bottom:33%;
  `}
`
