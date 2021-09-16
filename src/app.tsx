import { useRef } from 'react'

import { Sidebar } from './components/sidebar'
import { ContentArea } from 'components/content-area'

import * as S from './styles/app-styles'

function App () {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <S.Container>
      <Sidebar inputRef={inputRef} />
      <ContentArea inputRef={inputRef} />
    </S.Container>
  )
}

export { App }
