import styled from 'styled-components/macro'

export const Container = styled.aside`
  background: ${({ theme }) => theme.colors.black};
  padding: 2.4rem 0.8rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 920px) {
    max-width: min(36rem, 30vw);
    padding: 4.8rem 3.2rem;
  }
`

export const LogoImg = styled.img`
  max-width: 100%;
  margin-bottom: 2.4rem;
`

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.64rem;

  font-size: 1.6rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.white};

  &::before,
  &::after {
    content: '';

    background: ${({ theme }) => theme.colors.primary};
    width: 3.2rem;
    height: 2px;
    border-radius: 4px;
  }

  @media(min-width: 920px) {
    width: 100%;

    &::before {
      width: 100%;
      max-width: 1.35rem;
    }

    &::after {
      width: 100%;
    }
  }
`

export const AddFileButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
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
  color: ${({ theme }) => theme.colors.lightBlack};
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02, 1.02);
  }
`

export const PlusIcon = styled.img`
  flex-shrink: 0;
  margin-right: 1.2rem;
`

export const Files = styled.ul`
  width: 100%;
  padding-bottom: 0.8rem;
  list-style: none;

  display: flex;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.black};
  }

  @media(min-width: 920px) {
    width: 100%;
    flex-direction: column;
    overflow-x: initial;
  }
`
