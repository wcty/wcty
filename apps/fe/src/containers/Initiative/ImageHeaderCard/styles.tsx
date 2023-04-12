import styled, { css } from 'styled-components';
import { ReactComponent as Fillet } from '@assets/icons/fillet.svg';
import { ReactComponent as ArrowUp } from '@assets/icons/arrow-up.svg';
import { ReactNode } from 'react';
import { mobile } from 'common';

export const Image = styled.div.attrs(
    (props: { src: string; children?: ReactNode }) => ({
      children: (
        <>
          <img src={props.src} />
          {props.children}
        </>
      ),
    })
  )<{ src: string }>`
    position: relative;
    ${(p) =>
      p.theme.layout === 'desktop'
        ? css`
            > img:first-child {
              margin-top: calc(min((100vw - 960px) / 2, 60px));
              width: 960px;
              height: 360px;
              object-fit: cover;
              border-radius: 3px;
            }
          `
        : css`
            width: 100%;
            min-height: 148px;
            max-height: 360px;
            height: calc(0.375 * 100vw);
            > img:first-child {
              object-fit: cover;
              width: 100%;
              height: 100%;
            }
            ${(p) =>
              p.theme.isWebView &&
              css`
                height: calc(0.375 * 100vw + 29px);
                margin-top: -29px;
              `}
          `}
  `,
  ArrowUpIcon = styled(ArrowUp)`
    position: absolute;
    left: 17px;
    top: 10px;
  `,
  FilletButton = styled.button.attrs({
    children: (
      <>
        <Fillet />
        <ArrowUpIcon />
      </>
    ),
  })`
    position: absolute;
    bottom: 0;
    padding: 0;
    border: none;
    background: none;
    outline: none;
    right: 2rem;
    
    cursor: pointer;
    > svg:last-child {
      transform: translate(0px, 0px);
      transition: transform 0.3s;
    }
    :hover {
      > svg:last-child {
        transform: translate(3px, 3px);
      }
    }
    ${mobile(css`transform: translate(0, 4px);`)}
  `;
