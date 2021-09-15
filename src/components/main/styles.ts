import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  padding: 2.4rem 0.8rem;

  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    padding: 2.4rem 3.2rem;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
    height: 100%;
  }
`

export const ResultSide = styled.section`
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: 920px) {
    min-width: 50%;
    max-width: 50%;
    flex-shrink: 0;

    padding-left: 3.2rem;
    border-left: 1px solid ${({ theme }) => theme.colors.gray};
  }
`

export const ResultTitle = styled.h2`
  font-size: 3.2rem;
  line-height: 1.5;
`

export const ResultParagraph = styled.p`
  font-size: 1.8rem;
  opacity: 0.7;
  line-height: 1.5;
`
