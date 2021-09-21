import styled, { css } from 'styled-components/macro'

import {
  LogoImg,
  PlusIcon as AssetsPlusIcon,
} from 'resources/assets'

export const Container = styled.aside`${({ theme }) => css`
  background: ${theme.colors.black};
  padding: 2.4rem 0.8rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: ${theme.mediaQuery.mq920}) {
    flex-shrink: 0;
    width: 36rem;
    padding: 4.8rem 3.2rem;
  }
`}`

export const Logo = styled(LogoImg)`
  flex-shrink: 0;
  max-width: 100%;
  margin-bottom: 2.4rem;
`

export const Title = styled.h2`${({ theme }) => css`
  display: flex;
  align-items: center;
  gap: 0.64rem;

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.colors.white};

  &::before,
  &::after {
    content: '';

    background: ${theme.colors.primary};
    width: 3.2rem;
    height: 2px;
    border-radius: 4px;
  }

  @media(min-width: ${theme.mediaQuery.mq920}) {
    width: 100%;

    &::before {
      width: 100%;
      max-width: 1.35rem;
    }

    &::after {
      width: 100%;
    }
  }
`}`

export const AddFileButton = styled.button`${({ theme }) => css`
  background: ${theme.colors.primary};
  width: 100%;
  max-width: 26.8rem;

  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  margin: 2.4rem 0 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;
  color: ${theme.colors.lightBlack};
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.75;
  }

  @media (min-width: ${theme.mediaQuery.mq920}) {
    max-width: 100%;
  }
`}`

export const PlusIcon = styled(AssetsPlusIcon)`
  flex-shrink: 0;
  margin-right: 1.2rem;
`

export const Files = styled.ul`${({ theme }) => css`
  width: 100%;
  padding-bottom: 0.8rem;
  list-style: none;

  display: flex;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.white};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.black};
  }

  @media(min-width: ${theme.mediaQuery.mq920}) {
    width: 100%;
    flex-direction: column;
    overflow-x: initial;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 3.2px;
      height: auto;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.lightBlack};
    }
  }
`}`
