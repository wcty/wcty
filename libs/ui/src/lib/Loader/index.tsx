import styled, { css, keyframes } from 'styled-components';
import { layout, LayoutProps, position, PositionProps } from 'styled-system'
import { ReactComponent as LoaderIcon } from '@assets/icons/loader.svg'

export const 
rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,

Loader = styled.div.attrs({
  children: <LoaderIcon/>
})<PositionProps & LayoutProps & { center?: boolean }>`
  position: absolute;
  z-index: 100;
  >svg{
    animation: ${rotate} 1s linear infinite;
  }
  ${p=>p.center && css`
    left: 50%;  
    top: 50%;
    transform: translate(-50%,-50%);
  `}
  ${position}
  ${layout}

`