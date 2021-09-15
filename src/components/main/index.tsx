import fileBlueIcon from 'assets/file-blue-icon.svg'

import * as S from './styles'

export function Main () {
  return (
    <S.Container>
      <S.Header>
        <S.Label htmlFor='filename'>
          <S.FileIcon src={fileBlueIcon} alt='Nomear arquivo' />
        </S.Label>
        <S.InputFileName type='text' id='filename' defaultValue='roadmap' />
      </S.Header>

      <S.Content>
        <S.MarkdownSide>
          <S.MarkdownTextarea placeholder='Digite aqui seu markdown' />
        </S.MarkdownSide>
        <S.ResultSide>
          <S.ResultTitle>Bootcamp Brainn Co.</S.ResultTitle>
          <S.ResultParagraph>Lorem ipsum dolor sit amet simet</S.ResultParagraph>
        </S.ResultSide>
      </S.Content>
    </S.Container>
  )
}
