import { Fonts } from 'common'
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import React, { Fragment } from 'react'
import { ServerStyleSheet } from 'styled-components'
export default class MyDocument extends Document {

  static async getInitialProps(ctx:DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <Fragment key={0}>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>,
        ],
      } as DocumentInitialProps
    } finally {
      sheet.seal()
    }
  }
  render(): JSX.Element {
    return (
      <Html>
        <Head/>
        <Fonts/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}