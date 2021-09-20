import { ChangeEvent, FocusEvent, RefObject } from 'react'

import * as S from './styles'

type FilenameProps = {
  inputRef: RefObject<HTMLInputElement>
  name: string
  updateActiveFileName: (newFileName: string) => void
}

export function Filename ({
  inputRef,
  name,
  updateActiveFileName,
}: FilenameProps) {
  const handleChangeFileName = (e: ChangeEvent<HTMLInputElement>) => {
    updateActiveFileName(e.target.value)
  }

  const handleBlurInput = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === '') {
      updateActiveFileName('Sem título')
    }
  }

  return (
    <S.Container>
      <S.Wrapper htmlFor='filename'>
        <S.FileIcon />
      </S.Wrapper>
      <S.InputField
        type='text'
        id='filename'
        value={name}
        onChange={handleChangeFileName}
        onBlur={handleBlurInput}
        ref={inputRef}
        autoFocus
      />
    </S.Container>
  )
}
