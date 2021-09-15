import { ThemeProvider } from 'styled-components'

import { App } from './app'

import 'normalize.css'
import { GlobalStyle } from './styles/global-style'
import { theme } from './styles/theme'

export function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}
