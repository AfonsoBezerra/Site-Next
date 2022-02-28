import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Styles from '../styles/global'
import AOS from 'aos'

import 'aos/dist/aos.css'

function MyApp ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    })
  }, [])

  return (
    <>
      <Styles/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
