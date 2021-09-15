import fileBlueIcon from 'assets/file-blue-icon.svg'

import * as S from './styles'

export function Filename () {
  return (
    <S.Container>
      <S.Wrapper htmlFor='filename'>
        <S.FileIcon src={fileBlueIcon} alt='Nomear arquivo' />
      </S.Wrapper>
      <S.InputField type='text' id='filename' defaultValue='roadmap' />
    </S.Container>
  )
}
