import '@/styles/globals.css'
import Head from 'next/head';

const  App = ({ Component, pageProps }) =>{
  return (
    <>
      <Head>
        <title>Data Sensing System</title>
        <link rel="shortcut icon" href="/AIF_Purple_noncrop.png" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App