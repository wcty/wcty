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
`,

EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 0.25);
  z-index: 1;
`,

EditorContainer = styled.div`
  width: 450px;
  max-width: calc(100vw - 4rem);
  height: 370px;
  max-height: calc(100vh - 8rem);
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 2rem;
  position: relative;
`,

EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  >div:first-child {
    display: flex;
    flex: 1 1 auto;
  }
`,

Names = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`