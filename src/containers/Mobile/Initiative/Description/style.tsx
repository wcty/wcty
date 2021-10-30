import { animated } from 'react-spring';
import styled from 'styled-components/macro';

export const
CircleText = styled(animated.div)`
  ${p=>p.theme.font.body.semibold.t3}
  color: black;
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,
Circle = styled.div`
  width: 86px;
  height: 86px;
  position: relative;
`