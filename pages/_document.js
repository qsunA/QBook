import Document, {  Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`
            #__next { height: 100% }
          `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
            html, body{
                height: 100%;
                width: 100%;
                margin : 0;
            }

            body {
              display : table;
            }

            #__next { height: 100% }
        `}</style>
      </html>
    )
  }
}

export default MyDocument