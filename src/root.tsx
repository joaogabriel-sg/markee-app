import { ThemeProvider } from 'styled-components'

import { App } from './app'

import 'normalize.css'
import { theme, GlobalStyle } from 'styles'

export function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}
