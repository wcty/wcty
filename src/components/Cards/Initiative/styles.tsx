import styled from 'styled-components'

export const Info = styled.div`
  padding: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
  position: relative; 
  text-align: center;
`,

InitiativeContainer = styled.div`
  overflow: visible;
  bottom: 0;
  padding: 1rem;
  width: calc( 100% - 2rem );
  &[data-expanded] {
    padding: 0;
    width: 100%;
  }
`,

InitiativeWrapper = styled.div`
  transition: all 0.3s;
  cursor: pointer; 
  border-radius: 5px;
  overflow: visible;
  overflow-y: visible;
  min-height: 250px;
  max-height: 400px;
  width: calc( 100% - 2rem );
  bottom: 1rem;
  right: 1rem;
  will-change: height, min-height, width, bottom, right;
  &[data-expanded] {
    overflow-y: scroll;
    min-height: 100vh;
    max-height: 100vh;
    width: 100%;
    bottom: 0;
    right: 0;
  }
`,

InitiativeImg = styled.section`
    height: 160px;
    max-width: 400;
    overflow: hidden;
    display: block;
    width: 100%;
    margin: auto;
    object-fit: cover;
    position:relative;     
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    &[data-expanded] {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
            
`