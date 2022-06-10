import styled from 'styled-components'

export const 
Container = styled.div`
  display: flex;
  flex-direction: column;
`,

CheckedChannels = styled.span`
  color: ${props => props.theme.colors.label};
  padding: 15px 1.5rem;
`,

Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.label};
  background-color: ${props =>  props.theme.colors.backgroundLighter};
  box-shadow: 0px 0px 2px rgba(137, 150, 159, 0.1), 0px 2px 2px rgba(137, 150, 159, 0.1), 0px 1px 3px rgba(137, 150, 159, 0.1);
  border-radius: 3px;
  margin-bottom: 6px;
  padding: 15px 19px ;
`,

ArrowDown = styled.div`
  width: 8px;
  height: 8px;
  border-left: 1px solid ${props => props.theme.colors.label};
  border-top: 1px solid ${props => props.theme.colors.label};
  transform: rotate(-135deg) translate(-2px, 6px);
  margin-right: 16px;
`,

CommentsContainer = styled.div`
  margin-bottom: 5rem;
  border-radius: 3px;
  background-color: ${props =>  props.theme.colors.backgroundLighter};
  box-shadow: 0px 0px 2px rgba(137, 150, 159, 0.1), 0px 2px 2px rgba(137, 150, 159, 0.1), 0px 1px 3px rgba(137, 150, 159, 0.1);
  >div:last-child:not(:first-child){
    margin-top: -1rem;
  }
`
  
