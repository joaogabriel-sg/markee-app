import styled, { css } from 'styled-components/macro'

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

export const MarkdownTextarea = styled.textarea`${({ theme }) => css`
  background: ${theme.colors.white};
  width: 100%;
  min-height: 32rem;
  resize: none;

  border: none;
  outline: none;
  padding-right: 0.8rem;
  margin-bottom: 4rem;

  font-family: 'Inconsolata', 'Courier New', Courier, monospace;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${theme.colors.black};

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @media(min-width: ${theme.mediaQuery.mq920}) {
    flex-shrink: 0;
    min-width: 50%;
    max-width: 50%;
    height: 100%;

    padding-right: 3.2rem;
    border-right: 1px solid ${theme.colors.gray};
    margin-bottom: 0;

    font-size: 1.8rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`}`

export const Result = styled.output`${({ theme }) => css`
  font-size: 1.6rem;
  line-height: 1.5;
  word-break: break-all;
  color: ${theme.colors.black};

  @media (min-width: ${theme.mediaQuery.mq920}) {
    min-width: 50%;
    max-width: 50%;
    flex-shrink: 0;

    padding-left: 3.2rem;
    border-left: 1px solid ${theme.colors.gray};
  }
`}`
