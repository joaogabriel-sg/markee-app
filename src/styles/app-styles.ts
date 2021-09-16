import styled, { css } from 'styled-components/macro'

export const Container = styled.div`${({ theme }) => css`
  background: ${theme.colors.white};
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  @media(min-width: ${theme.mediaQuery.mq920}) {
    flex-direction: row;
  }
`}`
