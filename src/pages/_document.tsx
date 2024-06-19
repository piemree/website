import { Html, Head, Main, NextScript } from "next/document";

export default function Document(ctx: any) {
  console.log(ctx.locale);

  return (
    <Html lang={ctx.locale}>
      <Head/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
