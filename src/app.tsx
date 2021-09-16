import { useRef } from 'react'

import { Aside } from './components/aside'
import { Main } from 'components/main'

import * as S from './styles/app-styles'

function App () {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <S.Container>
      <Aside inputRef={inputRef} />
      <Main inputRef={inputRef} />
    </S.Container>
  )
}

export { App }
