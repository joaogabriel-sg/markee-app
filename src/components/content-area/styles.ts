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
    overflow-y: hidden;
  }
`

export const MarkdownTextarea = styled.textarea`${({ theme }) => css`
  background: ${theme.colors.background};
  width: 100%;
  min-height: 32rem;
  resize: none;

  border: none;
  border-bottom: 2px solid ${theme.colors.gray};
  outline: none;
  padding-right: 0.8rem;
  padding-bottom: 0.8rem;
  margin-bottom: 4rem;

  font-family: 'Inconsolata', 'Courier New', Courier, monospace;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.5;
  opacity: 0.86;
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
    padding-bottom: 0;
    border-right: 1px solid ${theme.colors.gray};
    border-bottom: none;
    margin-bottom: 0;
    overflow-y: scroll;

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
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  /* Good formatting for results */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  h1 {
    font-size: 3.2rem;
    margin: 0.64rem 0;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.6rem;
  }

  h5 {
    font-size: 1.4rem,;
  }

  h6 {
    font-size: 1.2rem;
  }

  p {
    margin: 1rem 0;
  }

  hr {
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 1px solid ${theme.colors.gray};

    &::after,
    &::before {
      display: table;
      content: "";
    }

    &:after {
      clear: both;
    }
  }

  a {
    color: #0366d6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    box-sizing: initial;
  }

  blockquote {
    background: rgba(150, 150, 150, 0.1);
    border-left: 4px solid ${theme.colors.gray};
    padding: 0.8rem 0.8rem 0.8rem 1.2rem;
    margin: 0;

    p {
      margin: 0;
    }
  }

  ol,
  ul {
    padding-left: 0;
    margin: 0;
    list-style-position: inside;

    ol,
    ul {
      margin: 0.4rem 0 ;
    }

    li + li {
      margin-top: 0.4rem;
    }
  }

  > ol,
  > ul {
    margin: 1.6rem 0;
  }

  ul ul {
    margin-left: 2.2rem;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;

    td,
    th {
      border: 1px solid ${theme.colors.black};
      padding: 0.8rem;
    }
  }

  pre {
    margin: 1.6rem 0;
  }

  code,
  pre {
    font-family: 'Inconsolata', 'Courier New', Courier, monospace;

    span {
      font-family: 'Inconsolata', 'Courier New', Courier, monospace;
    }
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }
`}`
