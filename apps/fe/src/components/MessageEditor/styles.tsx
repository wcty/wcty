import styled from 'styled-components';
import { flexbox, FlexProps, layout, LayoutProps, position, PositionProps, space, SpaceProps } from 'styled-system';

export const 
InputContent =  styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 19px 15px 19px;

  & > img {
      padding-left: 4px;
  }
`,

Actions = styled.div`
  padding: 15px 19px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,

Container = styled.div<PositionProps&LayoutProps&SpaceProps&FlexProps>`
  width: 100%;    
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  margin-bottom: 6px;
  position: relative;
  ${position}
  ${layout}
  ${space}
  ${flexbox}
`
