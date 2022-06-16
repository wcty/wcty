import styled, { css } from 'styled-components'
import { LibraryTiles } from 'components/Gallery/styles'

export const 
LibraryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 380px;
  height: 100%;
  overflow: hidden;
`,

Library = styled(LibraryTiles)`
  padding-left: 1rem !important;
  padding-top: 2rem !important;
  flex-direction: column;
  flex: 1 1 auto;
`,

Header = styled.div`
  ${p=>p.theme.layout==='desktop'?
  css`background-color: white; padding-top:2rem;`:
  css`padding:4rem 0;`}
`,

ButtonContainer = styled.div`
  position: absolute;
  top: 2.38rem;
  left: 2rem;
`