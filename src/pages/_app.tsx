import type { AppProps } from 'next/app'
import './../styles/comStyles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
