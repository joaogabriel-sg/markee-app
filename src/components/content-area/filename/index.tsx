import { ChangeEvent, FocusEvent, RefObject } from 'react'

import fileBlueIcon from 'resources/assets/file-blue-icon.svg'

import * as S from './styles'

type FilenameProps = {
  inputRef: RefObject<HTMLInputElement>
  name: string
  changeCurrentFilename: (newFilename: string) => void
}

export function Filename ({
  inputRef, name, changeCurrentFilename,
}: FilenameProps) {
  const handleChangeFilename = (e: ChangeEvent<HTMLInputElement>) => {
    changeCurrentFilename(e.target.value)
  }

  const handleBlurInput = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === '') {
      changeCurrentFilename('Sem título')
    }
  }

  return (
    <S.Container>
      <S.Wrapper htmlFor='filename'>
        <S.FileIcon src={fileBlueIcon} alt='Nomear arquivo' />
      </S.Wrapper>
      <S.InputField
        type='text'
        id='filename'
        value={name}
        onChange={handleChangeFilename}
        onBlur={handleBlurInput}
        ref={inputRef}
        autoFocus
      />
    </S.Container>
  )
}
