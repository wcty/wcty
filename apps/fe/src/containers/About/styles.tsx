import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
  `,
  Block = styled.div`
    display: flex;
    width: 100%;
    flex: 1 1 auto;
    position: relative;
    ${(p) =>
      p.theme.layout === 'desktop'
        ? css`
            flex-direction: row;
          `
        : css`
            flex-direction: column;
          `}
    >div {
      flex: 1 1 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      padding: 2rem 4rem;
      > p {
        ${(p) => p.theme.font.body.regular.t3}
      }
      > h4 {
        width: 100%;
        text-align: center;
        font-size: 14px;
      }
    }
  `,
  Footer = styled.div`
    display: flex;
    justify-content: start;
    align-items: start !important;
    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      justify-content: start;
      > div {
        width: 100%;
        border-bottom: solid 1px black;
        margin-bottom: 1rem;
      }
    }
  `;
