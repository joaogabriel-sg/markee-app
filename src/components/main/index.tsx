import { ChangeEvent, useState } from 'react'

import { Filename } from 'components/main/filename'
import { MarkdownSide } from './markdown-side'
import { ResultSide } from './result-side'

import * as S from './styles'

export function Main () {
  const [content, setContent] = useState('')

  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <S.Container>
      <Filename />

      <S.Content>
        <MarkdownSide
          content={content}
          handleChangeContent={handleChangeContent}
        />
        <ResultSide content={content} />
      </S.Content>
    </S.Container>
  )
}
