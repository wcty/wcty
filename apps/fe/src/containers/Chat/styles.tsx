import styled from "styled-components";

export const 
ChatsWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding-left: 100px;
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
  flex-direction: column;
  height: 60px;
  justify-content: center;
  border-bottom: 1.5px solid black;
  margin: 0 1rem;
`,

ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin-top: 60px;
`,

ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  border-left: 0.8px solid rgba(0,0,0,0.2);
`
