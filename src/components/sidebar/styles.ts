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
  margin-bottom: 2.4rem;

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
  width: 4.2rem;
  height: 4.2rem;

  padding: 0.8rem;
  border: none;
  border-radius: 50%;

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

  position: fixed;
  z-index: 10;
  bottom: 1.6rem;
  right: 1.6rem;

  @media (min-width: ${theme.mediaQuery.mq920}) {
    width: 100%;

    position: unset;
    border-radius: 4px;
    margin-bottom: 3.2rem;
  }
`}`

export const PlusIcon = styled(AssetsPlusIcon)`
  flex-shrink: 0;

  @media (min-width: ${({ theme }) => theme.mediaQuery.mq920}) {
    position: unset;
    margin-right: 1.2rem;
  }
`

export const ButtonText = styled.span`${({ theme }) => css`
  display: none;

  @media (min-width: ${theme.mediaQuery.mq920}) {
    display: block;
  }
`}`

export const Files = styled.ul`${({ theme }) => css`
  width: 100%;
  padding-bottom: 0.2rem;
  list-style: none;

  display: flex;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 2px;
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
    padding-bottom: 0;

    &::-webkit-scrollbar {
      width: 3.2px;
      height: auto;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.lightBlack};
    }
  }
`}`
