import { files } from 'mocks/files'

import * as S from './styles'

import logoImg from 'assets/logo.svg'
import plusIcon from 'assets/plus-symbol.svg'
import { File } from 'components/file'

export function Aside () {
  return (
    <S.Container>
      <S.LogoImg src={logoImg} alt='Markee App' />

      <S.Title>Arquivos</S.Title>

      <S.AddFileButton>
        <S.PlusIcon src={plusIcon} alt='Adicionar arquivo' />
        Adicionar arquivo
      </S.AddFileButton>

      <S.Files>
        {files.map((file) => (
          <File
            key={file.id}
            id={file.id}
            name={file.name}
          />
        ))}
      </S.Files>
    </S.Container>
  )
}
