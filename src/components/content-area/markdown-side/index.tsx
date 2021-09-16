import { ChangeEvent } from 'react'

import * as S from './styles'

type MarkdownSideProps = {
  content: string
  handleChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export function MarkdownSide ({
  content, handleChangeContent,
}: MarkdownSideProps) {
  return (
    <S.Container>
      <S.MarkdownTextarea
        placeholder='Digite aqui seu markdown'
        value={content}
        onChange={handleChangeContent}
      />
    </S.Container>
  )
}
