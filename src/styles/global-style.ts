import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body,
  [data-js="app"] {
    min-height: 100vh;

    @media (min-width: ${({ theme }) => theme.mediaQuery.mq920}) {
      height: 100vh;
    }
  }

  *,
  input,
  button {
    font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  }
`
