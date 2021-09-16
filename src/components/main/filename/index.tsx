import { RefObject } from 'react'

import fileBlueIcon from 'resources/assets/file-blue-icon.svg'

import * as S from './styles'

type FilenameProps = {
  inputRef: RefObject<HTMLInputElement>
}

export function Filename ({ inputRef }: FilenameProps) {
  return (
    <S.Container>
      <S.Wrapper htmlFor='filename'>
        <S.FileIcon src={fileBlueIcon} alt='Nomear arquivo' />
      </S.Wrapper>
      <S.InputField type='text' id='filename' defaultValue='roadmap' ref={inputRef} />
    </S.Container>
  )
}
