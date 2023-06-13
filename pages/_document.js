import Document, { Html, Head, Main, NextScript } from "next/document";
import { Value } from "sass";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link rel="icon"  sizes="60x60" href="../public/favicon.ico"/> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple.png"/>
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon32.png"/>
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon16.png"/>
	{/* <link rel="manifest" href="../public/site.webmanifest"/> */}
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
	<meta name="msapplication-TileColor" content="#da532c"/>
	<meta name="theme-color" content="#ffffff"/>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={Value.toString()}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
