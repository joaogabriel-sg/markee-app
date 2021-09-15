import styled from 'styled-components'

export const Container = styled.section`
  margin-bottom: 4rem;

  @media (min-width: 920px) {
    min-width: 50%;
    max-width: 50%;
    flex-shrink: 0;

    padding-right: 3.2rem;
    border-right: 1px solid ${({ theme }) => theme.colors.gray};
    margin-bottom: 0;
  }
`

export const MarkdownTextarea = styled.textarea`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  min-height: 32rem;
  resize: none;

  border: none;
  outline: none;
  padding-right: 0.8rem;

  font-family: 'Inconsolata', 'Courier New', Courier, monospace;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.black};

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @media(min-width: 920px) {
    height: 100%;
    padding-right: 0;

    font-size: 1.8rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`
