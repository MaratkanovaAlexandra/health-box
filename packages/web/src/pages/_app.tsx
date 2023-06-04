import { firebaseConfig } from '@/firebaseConfig'
import { Firebase } from '@health-box/common'
import { global, theme } from '@health-box/common'
import { createTheme, GlobalStyles, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  Firebase.connect(firebaseConfig)

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <GlobalStyles styles={global} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
