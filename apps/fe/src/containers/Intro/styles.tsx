import styled, {css} from 'styled-components';

export const 
Wrapper = styled.div`
  >div{
    max-width: 350px;
  }
  >img{
    margin-left: -4rem;
    margin-top:2rem;
    width: calc(100% + 8rem);
    max-height: 60vh;
    object-fit: cover;
  }
  >svg{
    position: absolute;
    bottom: 4rem;
    >g>circle{
      cursor: pointer;
    }
  }
  >div:last-child{
    position: absolute;
    bottom: 3rem;
    top: unset;
  }
`