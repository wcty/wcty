import styled from 'styled-components';
import { layout, LayoutProps, position, PositionProps } from 'styled-system'
import { ReactComponent as LoaderIcon } from '@assets/icons/loader.svg'

export const 
Loader = styled.div.attrs({
  children: <LoaderIcon/>
})<PositionProps & LayoutProps>`
  position: absolute;
  ${position}
  ${layout}
`