import { NextUIProvider } from '@nextui-org/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider as NextThemesProvider} from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <Component {...pageProps} />
          </NextThemesProvider>
      </NextUIProvider>
    )
}

export default MyApp
