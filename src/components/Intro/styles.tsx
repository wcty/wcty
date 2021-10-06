import styled from 'styled-components/macro'

export const Sidebar = styled.div`
  border-radius: 0;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  bottom: 0;
  right: 0;
  min-height: 250px;
  z-index: 14;
  position: fixed;
  @media (min-width: 600px) {
    max-width: 400px;
  };
`,

Stepper = styled.div`
  border-radius: 0;
  width: 100%;
  bottom: 0;
  right: 0;
  overflow: hidden;
  min-height: 4rem;
  z-index: 15;
  position: fixed;
  margin-left: auto;
  margin-top: auto;
  @media(min-width:600px) {
    max-width: 400;
  };
`,

Intro = styled.div`
  width: 100%;
  height: 100%;
  top:0;
  bottom: 0;
  left:0;
  right:0;
  position: absolute;
  background-color: white;
  z-index: 5;
`,

Wrapper = styled.div`
  padding: 0 2rem;
  text-align: center;
  margin-bottom: 12rem;
`
