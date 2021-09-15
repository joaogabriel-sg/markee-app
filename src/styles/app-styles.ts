import styled from 'styled-components/macro'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  @media(min-width: 920px) {
    flex-direction: row;
  }
`
