import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
<Html>
  <Head>     
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Nastaliq+Urdu:wght@400;700&family=Raleway:wght@300;500;700&display=swap"rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />
  </Head>
  <body>
    <Main />
    <NextScript />
  </body>
</Html>
  )
}