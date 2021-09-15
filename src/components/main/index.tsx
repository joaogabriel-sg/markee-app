import { Filename } from 'components/filename'
import * as S from './styles'

export function Main () {
  return (
    <S.Container>
      <Filename />

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
