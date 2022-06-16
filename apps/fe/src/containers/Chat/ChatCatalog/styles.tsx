import styled, { css } from "styled-components";

export const 
ChatList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  ${p=>p.theme.layout==='desktop'?
  css`max-width: 300px; margin-top: 60px;`:
  css`max-width: 100%;`}
  /* padding-right: 1rem; */
  .search{
    margin-top: 1.5rem;
    height: 3rem;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
    margin: 1.5rem 1rem 0rem 1rem;
    z-index: 1;
  }
`,

ChatsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin: 0 1rem;
`,

AddChatButton = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  padding-left: 2rem;
  :hover{
    background-color: rgba(0,0,0,0.03);
    span{
      text-decoration: underline;
    }
  }
`,

ChatRow = styled.div<{selected?:boolean}>`
  display: flex;
  height: 4rem;
  align-items: center;
  padding-left: 2rem;
  cursor: pointer;
  :hover{
    background-color: rgba(0,0,0,0.03);
  }
  ${p=>p.selected && css`
    background-color: ${p=>p.theme.colors.backgroundActive};
    :hover{
      background-color: #f4f8fd;
    }
  `}
`,

InitiativeLink = styled.span`
  cursor: pointer;
  :hover{
    text-decoration: underline;
  }
`