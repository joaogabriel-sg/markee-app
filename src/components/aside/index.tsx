import { File } from 'components/aside/file'

import * as S from './styles'

import logoImg from 'resources/assets/logo.svg'
import plusIcon from 'resources/assets/plus-symbol.svg'

import { files } from 'resources/mocks/files'

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
            active={file.active}
            status={file.status}
          />
        ))}
      </S.Files>
    </S.Container>
  )
}
