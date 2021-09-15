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

export const Header = styled.header`
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
`

export const Label = styled.label``

export const FileIcon = styled.img`
  margin-right: 1.6rem;
`

export const InputFileName = styled.input`
  background: none;
  width: 100%;
  border: none;
  outline: none;

  font-size: 1.8rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.black};
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

export const MarkdownSide = styled.section`
  @media (min-width: 920px) {
    min-width: 50%;
    max-width: 50%;
    flex-shrink: 0;

    padding-right: 3.2rem;
    border-right: 1px solid ${({ theme }) => theme.colors.gray};

    overflow-y: hidden;
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
      width: 0;
    }
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
