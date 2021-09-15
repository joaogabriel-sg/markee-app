import styled, { css } from 'styled-components/macro'

export const Container = styled.section`${({ theme }) => css`
  color: ${theme.colors.black};

  @media (min-width: ${theme.mediaQuery.mq920}) {
    min-width: 50%;
    max-width: 50%;
    flex-shrink: 0;

    padding-left: 3.2rem;
    border-left: 1px solid ${theme.colors.gray};
  }
`}`

export const Title = styled.h2`
  font-size: 3.2rem;
  line-height: 1.5;
`

export const Paragraph = styled.p`
  font-size: 1.8rem;
  opacity: 0.7;
  line-height: 1.5;
`
