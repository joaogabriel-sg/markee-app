import { ChangeEvent, RefObject, useState } from 'react'

import { Filename } from 'components/content-area/filename'
import { MarkdownSide } from './markdown-side'
import { ResultSide } from './result-side'

import * as S from './styles'

type ContentAreaProps = {
  inputRef: RefObject<HTMLInputElement>
}

export function ContentArea ({ inputRef }: ContentAreaProps) {
  const [content, setContent] = useState('')

  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <S.Container>
      <Filename inputRef={inputRef} />

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
