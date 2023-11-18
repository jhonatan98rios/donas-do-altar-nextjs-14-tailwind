
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from '@/meta/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  )
}
