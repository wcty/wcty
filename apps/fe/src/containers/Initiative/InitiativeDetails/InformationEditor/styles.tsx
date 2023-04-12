import { mobile } from 'common';
import styled, { css } from 'styled-components';

export const 
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
  max-width: 100vw;
  min-height: 500px;
  max-height: 100vh;
  ${mobile(css`height: 100vh;`)}
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
  margin-bottom: 3rem;
  >div:first-child {
    display: flex;
    flex: 1 1 auto;
  }
`