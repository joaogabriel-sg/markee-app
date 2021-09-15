import { Aside } from './components/aside'
import { Main } from 'components/main'

import * as S from './styles/app-styles'

function App () {
  return (
    <S.Container>
      <Aside />
      <Main />
    </S.Container>
  )
}

export { App }
