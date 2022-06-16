import styled, { css } from "styled-components";

export const 

ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  position: relative;
  ${p=>p.theme.layout==='desktop'?
  css`margin-top: 60px;`:
  css`margin-top: 0px;`}
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
  box-shadow: 2px -1px 4px rgba(0,0,0,0.05);
  ${p=>p.theme.layout==='desktop'?
  css`margin: 0 1rem;`:
  css`margin: 0;`}
`,

MessageContainer = styled.div`
  background-color: white;
  padding: 1rem;
  align-self: start;
  margin: 0rem 1rem 1rem 0rem;
  display: flex;
  border-radius: 15px;
  ${p=>p.theme.layout==='desktop'?
  css`max-width: 70%;`:
  css`max-width: 85%;`}
`,

UserMessageContainer = styled.div`
  background-color: ${p=>p.theme.colors.backgroundActive};
  padding: 1rem;
  align-self: end;
  margin: 0rem 0rem 1rem 1rem;
  display: flex;
  border-radius: 15px;
  ${p=>p.theme.layout==='desktop'?
  css`max-width: 70%;`:
  css`max-width: 85%;`}
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