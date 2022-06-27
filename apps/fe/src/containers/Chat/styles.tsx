import styled, { css } from "styled-components";

export const 
ChatsWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  ${p=>p.theme.layout==='desktop'?
  css`padding-left: 100px;`:
  css`padding-left: unset;`}
`,

ChatList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  max-width: 300px;
  margin-top: 60px;
  /* padding-right: 1rem; */
  .search{
    margin-top: 1.5rem;
    height: 3rem;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
    margin: 1.5rem 1rem 1rem 1rem;
  }
`,


ChatListHeading = styled.div`
  display: flex;  
  border-bottom: 1px solid black;
  ${p=>p.theme.layout==='desktop'?
  css`margin: 0 1rem; height: 60px; flex-direction: column; justify-content: center;`:
  css`padding: 0 2rem; align-items:center; height: 72px;`}
`
