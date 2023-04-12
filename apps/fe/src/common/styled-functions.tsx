import styled, { css, FlattenSimpleInterpolation } from "styled-components";

const mobileBreakpoint = 960;

const mobileLayout = (children: FlattenSimpleInterpolation, not?: boolean) =>
  not
    ? css`
        @media (min-width: ${mobileBreakpoint + 1}px) {
          ${children}
        }
      `
    : css`
        @media (max-width: ${mobileBreakpoint}px) {
          ${children}
        }
      `;

const desktopLayout = (children: FlattenSimpleInterpolation, not?: boolean) =>
  not
    ? css`
        @media (max-width: ${mobileBreakpoint}px) {
          ${children}
        }
      `
    : css`
        @media (min-width: ${mobileBreakpoint + 1}px) {
          ${children}
        }
      `;

export function mobile(children: FlattenSimpleInterpolation) {
  return css`
    ${mobileLayout(children)}
  `;
}

export function desktop(children: FlattenSimpleInterpolation) {
  return css`
    ${desktopLayout(children)}
  `;
}

export function sizes(mobile: string, desktop: string) {
  return `(max-width: ${mobileBreakpoint}px) ${mobile}, ${desktop}`;
}

export const MobileOnly = styled.div`
  display: contents;
  position: relative;
  ${mobileLayout(css`display: none;`, true)}
`, 

DesktopOnly = styled.div`
  display: contents;
  position: relative;
  ${desktopLayout(css`display: none;`, true)}
`;

