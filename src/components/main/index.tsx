import { Filename } from 'components/main/filename'
import { MarkdownSide } from './markdown-side'
import { ResultSide } from './result-side'

import * as S from './styles'

export function Main () {
  return (
    <S.Container>
      <Filename />

      <S.Content>
        <MarkdownSide />
        <ResultSide />
      </S.Content>
    </S.Container>
  )
}
