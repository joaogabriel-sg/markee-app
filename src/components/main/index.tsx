import { Filename } from 'components/main/filename'
import { MarkdownSide } from './markdown-side'

import * as S from './styles'

export function Main () {
  return (
    <S.Container>
      <Filename />

      <S.Content>
        <MarkdownSide />
        <S.ResultSide>
          <S.ResultTitle>Bootcamp Brainn Co.</S.ResultTitle>
          <S.ResultParagraph>Lorem ipsum dolor sit amet simet</S.ResultParagraph>
        </S.ResultSide>
      </S.Content>
    </S.Container>
  )
}
