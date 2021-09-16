import styled, { css } from 'styled-components/macro'

export const Container = styled.section`${({ theme }) => css`
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${theme.colors.black};

  @media (min-width: ${theme.mediaQuery.mq920}) {
    min-width: 50%;
    max-width: 50%;
    flex-shrink: 0;

    padding-left: 3.2rem;
    border-left: 1px solid ${theme.colors.gray};
  }
`}`
