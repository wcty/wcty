import styled from 'styled-components/macro'

export const CreateInitiativeWrapper = styled.div`
  width: calc( 100% - 2rem );
  flex-grow: 1;
  z-index: 999;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  max-height: 350;
  @media (min-width: 600px) {
    max-width: 400px;
  }
`,

Paper = styled.div`
  border-radius: 5px;
  padding: 1rem;
  background-color: white;
`,

MarkerImg = styled.img`
  position: absolute;
  top: calc( ( 100% - 250px ) / 2  );
  left: 50%;
  transform: translate(-21px, -42px);
  z-index: 15;
`,

ExplorePanel = styled.div`
  min-height: 290px;
  min-width: 100%;
  z-index: 10;
  @media (min-width: 600px) {
    max-width: 400px;
  }
  cursor: pointer;
  border-radius: 5px;
  overflow-y: visible;
  min-height: 250px;
  max-height: 400px;
  width: 100%;
  bottom: 1rem;
  right: 1rem;
  min-width: calc( 100% - 2rem );
`,

ExploreInfo = styled.div`
  padding: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
  position: relative; 
  text-align: center;
`,

FeedWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  @media (min-width: 600px) {
    max-width: 400px;
    width: 50%;
    overflow-x: hidden;
  }
`,

FeedSidebar = styled.div`
  overflow: visible;
  margin-top: 100%;
  width: 100%;
  max-height: 100%;
  bottom: 0;
  right: 0;
  min-height: 250px;
  z-index: 16;
  position: absolute;
  @media (min-width: 600px) {
    margin-top: 0;
    max-width: 400;
    justify: flex-end;
    float: right;
  }
`,

LoadMoreContainer = styled.div`
  position:absolute;
  padding: 1rem;
  overflow: visible;
  bottom: 0;
  width: calc( 100% - 2rem )
`,

LoadMoreWrapper = styled.div`
  min-height: 250px;
  min-width: 100%;
  z-index: 10;
  @media (min-width: 600px) {
    maxWidth: 400,
  }
  background: none;
  border-radius: 5px;
  overflow-y: visible;
  min-height: 250px;
  max-height: 400px;
  width: 100%;
  bottom: 1rem;
  right: 1rem;
  min-width: calc( 100% - 2rem );
`