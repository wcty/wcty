import styled from 'styled-components/macro'

export const 
Wrapper = styled.div`
  position: absolute;
  left: 0; 
  right: 0;
  top: 0; 
  bottom: 0;
  /* pointer-events: none; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.25);
  z-index: 100;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`,

Box = styled.div`
  width: 600px;
  height: 600px;
  background-color: #F4EADE;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.15);
  padding: 2.5rem 3rem;
  position: relative;
`,

Close = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #F4EADE;
  color: #a09b9b;
  display: flex;
  justify-content: center;
  align-items: center;
  content: '✕';
  position: absolute;
  right: 2.5rem;
  top: 2rem;
  border-radius: 2px;
  cursor: pointer;
  :after{
    font-size: 24px;
    font-weight: lighter;
    content: '✕';
    padding-bottom:3px;
  }
  :hover{
    background-color: #e6dcd0;
  }
`
