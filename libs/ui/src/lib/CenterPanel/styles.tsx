import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    /* pointer-events: none; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 1;
    ${(p) =>
      p.theme.layout === 'mobile' &&
      css`
        width: 100%;
        height: 100%;
      `}
  `,
  Box = styled.div`
    ${(p) =>
      p.theme.layout === 'mobile'
        ? css`
            width: 100%;
            height: 100%;
          `
        : css`
            width: 350px;
            height: 600px;
          `}
    /* background-color: #F4EADE; */
  background-color: #ffffff;
    max-height: 100%;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.15);
    padding: 44px;
    position: relative;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Close = styled.button`
    border: none;
    width: 2rem;
    height: 2rem;
    /* background-color: #F4EADE;
  color: #a09b9b; */
    background-color: #ffffff;
    color: #000000;

    display: flex;
    justify-content: center;
    align-items: center;
    content: '✕';
    position: absolute;
    right: 44px;
    top: 50px;
    border-radius: 2px;
    cursor: pointer;
    :after {
      font-size: 24px;
      font-weight: lighter;
      content: '✕';
      padding-bottom: 3px;
    }
    :hover {
      background-color: #ebebeb;
    }
  `;
