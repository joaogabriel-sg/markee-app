import styled, { css } from 'styled-components/macro'

export const Container = styled.div`${({ theme }) => css`
  background: ${theme.colors.background};
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  @media(min-width: ${theme.mediaQuery.mq920}) {
    flex-direction: row;
    height: 100vh;
    overflow-y: hidden;
  }
`}`
