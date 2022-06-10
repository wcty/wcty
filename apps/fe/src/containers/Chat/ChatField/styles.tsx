import styled from "styled-components";

export const 

ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin-top: 60px;
`,

ChatWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1 1 auto;
  width: 100%;
  border-left: 0.8px solid rgba(0,0,0,0.2);
  overflow: hidden;
`,

EditorContainer = styled.div`
  background-color: white;
  margin: 0 1rem;
  box-shadow: 2px -1px 4px rgba(0,0,0,0.05);
`,

MessageContainer = styled.div`
  background-color: white;
  padding: 1rem;
  align-self: start;
  margin: 0rem 1rem 1rem 0rem;
  max-width: 70%;
  display: flex;
  border-radius: 15px;
`,

UserMessageContainer = styled.div`
  background-color: ${p=>p.theme.colors.backgroundActive};
  padding: 1rem;
  align-self: end;
  margin: 0rem 0rem 1rem 1rem;
  max-width: 70%;
  display: flex;
  border-radius: 15px;
`,

TimeStamp = styled.div`
  color: #6E737A;
  font-size: 6px;
  font-family: Montserrat, sans-serif;
  margin-left: 1rem;
  align-self: center;
`,

MessagesContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1 1 auto;
  width: 100%;
  overflow-y: auto;
  >div>div>div.simplebar-scrollbar.simplebar-visible::before {
    background: rgba(255,255,255,1) !important;
  }

`,

MessageWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1 1 auto;
  width: 100%;
  padding: 3rem 1rem 0 1rem;
`