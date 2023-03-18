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

AvatarContainer = styled.div`
  margin-bottom: 2rem;
  height:0;
  position:relative;
  ${p=>p.theme.layout==='desktop'?
  css`
    width:100%;
    padding-bottom:100%;
  `:
  css`
    width:33%;
    padding-bottom:33%;
  `}
`,
Avatar = styled.img`
  border-radius: 50%;
  object-fit: contain;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
