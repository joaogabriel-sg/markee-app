import styled from 'styled-components/macro'

export const Container = styled.main`
  width: 100%;
  padding: 2.4rem 0.8rem;

  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.mediaQuery.mq920}) {
    padding: 2.4rem 3.2rem;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.mediaQuery.mq920}) {
    flex-direction: row;
    height: 100%;
  }
`
