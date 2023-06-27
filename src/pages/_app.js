import React from 'react'
import Head from 'next/head'
import Theme from '../styles/theme';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Anatoly Bakum</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 