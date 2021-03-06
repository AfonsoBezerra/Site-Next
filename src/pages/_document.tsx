import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  // permite criação de estilos css em javascript
  static async getInitialProps (
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
      })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  /* eslint no-undef: "off" */
  render (): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          {/* METAS */}
          <meta charSet="UTF-8" />

          {/* FONTS */}
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
          rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet" />
          {/* LOGO */}
           <link rel="icon" href="/favicon-32x32.png" />
        </Head>

        <body>
          <Main />

          {/* SCRIPTS */}
          <NextScript />
        </body>
      </Html>
    )
  }
}
