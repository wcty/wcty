import styled, { css as css_, ThemedCssFunction } from 'styled-components';
const css = css_ as ThemedCssFunction<{}>;

export const font = {
  title: {
    mono: (() => {
      const font = css`
        font-family: 'IBM Plex Mono', monospace;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.87);
      `;
      return {
        /** font-size: 30 */
        h1: css`
          ${font};
          font-size: 30px;
        `,
        /** font-size: 24 */
        h2: css`
          ${font};
          font-size: 24px;
        `,
        /** font-size: 18 */
        h3: css`
          ${font};
          font-size: 18px;
        `,
        /** font-size: 14 */
        h4: css`
          ${font};
          font-size: 14px;
        `,
        /** font-size: 11 */
        h5: css`
          ${font};
          font-size: 11px;
        `,
      };
    })(),
    monobold: (() => {
      const font = css`
        font-family: 'IBM Plex Mono', monospace;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.87);
      `;
      return {
        /** font-size: 30 */
        h1: css`
          ${font};
          font-size: 30px;
        `,
        /** font-size: 24 */
        h2: css`
          ${font};
          font-size: 24px;
        `,
        /** font-size: 18 */
        h3: css`
          ${font};
          font-size: 18px;
        `,
        /** font-size: 14 */
        h4: css`
          ${font};
          font-size: 14px;
        `,
        /** font-size: 10 */
        h5: css`
          ${font};
          font-size: 11px;
        `,
      };
    })(),
  },
  body: {
    regular: (() => {
      const font = css`
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.87);
      `;
      return {
        /** font-size: 18 */
        t1: css`
          ${font};
          font-size: 18px;
        `,
        /** font-size: 18 */
        t2: css`
          ${font};
          font-size: 16px;
        `,
        /** font-size: 14 */
        t3: css`
          ${font};
          font-size: 14px;
        `,
        /** font-size: 12 */
        t4: css`
          ${font};
          font-size: 12px;
        `,
        /** font-size: 11 */
        t5: css`
          ${font};
          font-size: 11px;
        `,
      };
    })(),

    semibold: (() => {
      const font = css`
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.87);
      `;
      return {
        /** font-size: 18 */
        t1: css`
          ${font};
          font-size: 18px;
        `,
        /** font-size: 16 */
        t2: css`
          ${font};
          font-size: 16px;
        `,
        /** font-size: 14 */
        t3: css`
          ${font};
          font-size: 14px;
        `,
        /** font-size: 12 */
        t4: css`
          ${font};
          font-size: 12px;
        `,
        /** font-size: 11 */
        t5: css`
          ${font};
          font-size: 11px;
        `,
      };
    })(),
  },
};
