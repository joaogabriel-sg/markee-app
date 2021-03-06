import styled, { css } from 'styled-components/macro'

type ContainerProps = {
  isActive: boolean
}

export const Container = styled.li<ContainerProps>`
  ${({ theme, isActive }) => css`
    padding: 0.8rem 1.4rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    opacity: 0.65;
    transition: background 0.2s ease-in-out, opacity 0.2s ease-in-out;

    &:hover {
      background: ${theme.colors.lightBlack};
      opacity: 1;
    }

    & + & {
      margin-left: 1.6rem;
    }

    @media(min-width: 920px) {
      & + & {
        margin: 1.6rem 0 0 0;
      }

      &:hover {
        > button {
          opacity: 1;
        }
      }
    }

    ${isActive && css`
      background: ${theme.colors.lightBlack};
      opacity: 1;
    `}
  `}
`

export const Link = styled.a`${({ theme }) => css`
  width: 100%;
  max-width: 16rem;
  margin-right: 1.2rem;

  overflow: hidden;

  display: flex;
  align-items: center;

  font-size: 1.6rem;
  text-decoration: none;
  color: ${theme.colors.white};

  > svg {
    flex-shrink: 0;
  }

  @media (min-width: ${theme.mediaQuery.mq920}) {
    max-width: 100%;
  }
`}`

export const Name = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 1.6rem;
`

export const DeleteButton = styled.button`
  background: none;

  flex-shrink: 0;
  border: none;
  cursor: pointer;
  opacity: 1;

  transition: opacity 0.2s ease-in-out;

  @media(min-width: ${({ theme }) => theme.mediaQuery.mq920}) {
    opacity: 0;
  }
`
