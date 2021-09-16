import { ChangeEvent, RefObject, useState } from 'react'

import { File } from 'resources/types/file.type'

import { Filename } from 'components/content-area/filename'
import { MarkdownSide } from './markdown-side'
import { ResultSide } from './result-side'

import * as S from './styles'

type ContentAreaProps = {
  inputRef: RefObject<HTMLInputElement>
  currentFile: File
}

export function ContentArea ({ inputRef, currentFile }: ContentAreaProps) {
  const [content, setContent] = useState('')

  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <S.Container>
      {!!currentFile.id && (
        <>
          <Filename inputRef={inputRef} name={currentFile.name} />

          <S.Content>
            <MarkdownSide
              content={content}
              handleChangeContent={handleChangeContent}
            />
            <ResultSide content={content} />
          </S.Content>
        </>
      )}
    </S.Container>
  )
}
