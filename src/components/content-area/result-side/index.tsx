import marked from 'marked'

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

type ResultSideProps = {
  content: string
}

export function ResultSide ({ content }: ResultSideProps) {
  return (
    <S.Container
      dangerouslySetInnerHTML={{ __html: marked(content) }}
    />
  )
}
