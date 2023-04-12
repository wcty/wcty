import { desktop } from 'common';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: relative;
    ${(p) =>
      p.theme.layout === 'desktop'
        ? css`
            width: 960px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            overflow-x: visible;
          `
        : css`
            width: 100%;
            height: 100%;
            min-height: 100%;
            position: relative;
            background-color: ${(p) => p.theme.colors.primary};
          `}
  `,
  Body = styled.div`
    width: 100%;
    ${desktop(css`
        display: flex;
        margin-top: 1rem;
      `)}
  `,
  RightColumn = styled.div`
    flex: 1 1 auto;
    padding-left: 2rem;
  `,
  LeftColumn = styled.div`
    flex: 0 0 400px;
  `;
