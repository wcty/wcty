import styled from 'styled-components';

export const 

Channels  = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.label};
`,

InputContent =  styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 19px 0 19px;

  & > img {
      padding-left: 4px;
  }

`