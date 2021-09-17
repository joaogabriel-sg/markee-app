import { ChangeEvent, RefObject } from 'react'

import { File } from 'resources/types/file.type'

import { Filename } from 'components/content-area/filename'
import { MarkdownSide } from './markdown-side'
import { ResultSide } from './result-side'

import * as S from './styles'

type ContentAreaProps = {
  inputRef: RefObject<HTMLInputElement>
  currentFile: File
  changeCurrentFilename: (newFilename: string) => void
  changeCurrentContent: (newContent: string) => void
}

export function ContentArea ({
  inputRef,
  currentFile,
  changeCurrentFilename,
  changeCurrentContent,
}: ContentAreaProps) {
  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changeCurrentContent(e.target.value)
  }

  return (
    <S.Container>
      {!!currentFile.id && (
        <>
          <Filename
            inputRef={inputRef}
            name={currentFile.name}
            changeCurrentFilename={changeCurrentFilename}
          />

          <S.Content>
            <MarkdownSide
              content={currentFile.content}
              handleChangeContent={handleChangeContent}
            />
            <ResultSide content={currentFile.content} />
          </S.Content>
        </>
      )}
    </S.Container>
  )
}
