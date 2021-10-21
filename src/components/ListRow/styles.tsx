import styled, {css} from "styled-components/macro";

export const 
ListItem = styled.div`
  cursor: pointer;
  width: 100%;
  min-height: 50px;
  display: flex;
  padding: 0px 10px;
  align-items: center;
  img {
    border-radius: 3px;
    object-fit: cover;
    width: 30px;
    height: 30px;
  }
  div{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
    span {
      transform: translate(0px,0px);
      transition: transform 0.5s;
    }
  }
  :hover{
    background-color: #F0F4F8;
    div > span {
      transform: translate(2px,2px);
    }
  }
  span{
    ${props=>props.theme.font.body.semibold.t5};
  }
  span.address{
    ${props=>props.theme.font.body.regular.t5}
    color: #5f5f5f;
  }
`
