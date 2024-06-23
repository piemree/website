import { Html, Head, Main, NextScript } from "next/document";

export default function Document(ctx: any) {
  console.log(ctx.locale);

  return (
    <Html lang={ctx.locale}>
      <Head>
        <link rel="shortcut icon" href="/terminal.svg" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
