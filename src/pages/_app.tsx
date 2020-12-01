import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import {Fragment} from 'react'
import LayoutAdmin from '../components/Layout/LayoutAdmin'

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter().asPath;
  const Layout = LayoutAdmin ? LayoutAdmin : Fragment;

  return(
    route === '/' 
      ? <Component {...pageProps} />
      : <Layout>
      <Component {...pageProps} />
    </Layout>    
  ) 
}

export default MyApp
