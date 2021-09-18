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
  file?: File
  updateActiveFileName: (newFileName: string) => void
  updateActiveFileContent: (newFileContent: string) => void
}

export function ContentArea ({
  inputRef,
  file,
  updateActiveFileName,
  updateActiveFileContent,
}: ContentAreaProps) {
  const handleChangeFileContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateActiveFileContent(e.target.value)
  }

  if (!file) return null

  return (
    <S.Container>
      <>
        <Filename
          inputRef={inputRef}
          name={file.name}
          updateActiveFileName={updateActiveFileName}
        />

        <S.Content>
          <S.MarkdownTextarea
            placeholder='Digite aqui seu markdown'
            value={file.content}
            onChange={handleChangeFileContent}
          />

          <S.Result
            dangerouslySetInnerHTML={{ __html: marked(file.content) }}
          />
        </S.Content>
      </>
    </S.Container>
  )
}
