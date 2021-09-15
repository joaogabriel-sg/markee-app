import styled, { css } from 'styled-components'

type ContainerProps = {
  isActive: boolean
}

export const Container = styled.li<ContainerProps>`
  padding: 0.8rem 1.4rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  opacity: 0.65;
  transition: background 0.2s ease-in-out, opacity 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.lightBlack};
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

  ${({ isActive }) => isActive && css`
    background: ${({ theme }) => theme.colors.lightBlack};
    opacity: 1;
  `}
`

export const Link = styled.a`
  width: 100%;
  margin-right: 1.2rem;

  overflow: hidden;

  display: flex;
  align-items: center;

  font-size: 1.6rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`

export const FileIcon = styled.img`
  margin-right: 1.6rem;
`

export const Name = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`

export const DeleteButton = styled.button`
  background: none;

  flex-shrink: 0;
  border: none;
  cursor: pointer;
  opacity: 1;

  transition: opacity 0.2s ease-in-out;

  @media(min-width: 920px) {
    opacity: 0;
  }
`

export const DeleteIcon = styled.img``
