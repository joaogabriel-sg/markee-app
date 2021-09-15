import styled, { css } from 'styled-components/macro'

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.gray};
`

export const SpanStyled = styled(Span)`
  color: ${({ theme }) => theme.colors.primary};
  font-style: italic;
`

export const Title = styled.div`${({ theme }) => css`
  background: ${theme.colors.black};
  font-size: 3rem;
  color: ${theme.colors.primary};
`}`
