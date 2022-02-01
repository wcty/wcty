import styled, { css } from 'styled-components';
import { layout, LayoutProps, position, PositionProps } from 'styled-system'
import { ReactComponent as LoaderIcon } from '@assets/icons/loader.svg'

export const 
Loader = styled.div.attrs({
  children: <LoaderIcon/>
})<PositionProps & LayoutProps & { center?: boolean }>`
  position: absolute;
  z-index: 100;
  ${p=>p.center && css`
    left: 50%;  
    top: 50%;
    transform: translate(-50%,-50%);
  `}
  ${position}
  ${layout}

`