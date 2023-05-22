import '@/styles/globals.css'
import Layout from '../src/components/layout'

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
