import * as S from 'app-styles'

function App () {
  return (
    <>
      <S.Title>
        App {' '}
        <S.Span>Texto do Span</S.Span> {' '}
        <S.SpanStyled>Texto itálico</S.SpanStyled> {' '}
      </S.Title>
    </>
  )
}

export { App }
