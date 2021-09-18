import { ChangeEvent, RefObject } from 'react'
import marked from 'marked'

import { File } from 'resources/types/file.type'

import { Filename } from 'components/content-area/filename'

import 'highlight.js/styles/github.css'
import * as S from './styles'

import('highlight.js').then((hljs) => {
  const h = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }

      return h.highlightAuto(code).value
    },
  })
})

type ContentAreaProps = {
  inputRef: RefObject<HTMLInputElement>
  currentFile: File | undefined
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
      {!!currentFile?.id && (
        <>
          <Filename
            inputRef={inputRef}
            name={currentFile.name}
            changeCurrentFilename={changeCurrentFilename}
          />

          <S.Content>
            <S.MarkdownTextarea
              placeholder='Digite aqui seu markdown'
              value={currentFile.content}
              onChange={handleChangeContent}
            />

            <S.Result
              dangerouslySetInnerHTML={{ __html: marked(currentFile.content) }}
            />
          </S.Content>
        </>
      )}
    </S.Container>
  )
}
