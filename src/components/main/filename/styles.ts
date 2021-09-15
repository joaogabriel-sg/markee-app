import styled from 'styled-components'

export const Container = styled.header`
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
`

export const Wrapper = styled.label``

export const FileIcon = styled.img`
  margin-right: 1.6rem;
`

export const InputField = styled.input`
  background: none;
  width: 100%;
  border: none;
  outline: none;

  font-size: 1.8rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.black};
`
