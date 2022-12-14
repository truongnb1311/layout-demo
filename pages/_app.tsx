import '../styles/globals.css'
import '../styles/main.scss'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import Layout from '../components/common/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
