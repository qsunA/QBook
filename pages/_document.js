import Document, {  Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
            html,body{
                height: 100%;
                width: 100%;
                overflow: hidden;
            }

            #__next {
                min-height : 100%;
            }
        `}</style>
      </html>
    )
  }
}

export default MyDocument