import { files } from 'mocks/files'

import * as S from './styles'

import logoImg from 'assets/logo.svg'
import plusIcon from 'assets/plus-symbol.svg'
import deleteIcon from 'assets/delete-icon.svg'
import fileWhiteIcon from 'assets/file-white-icon.svg'

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
          <S.File key={file.id}>
            <S.Link href='/'>
              <S.FileIcon src={fileWhiteIcon} alt={`Arquivo ${file.name}`} />
              <S.FileName>{file.name}.md</S.FileName>
            </S.Link>
            <S.DeleteButton type='button'>
              <S.DeleteIcon
                src={deleteIcon}
                alt={`Deletar arquivo ${file.name}.md`}
              />
            </S.DeleteButton>
          </S.File>
        ))}
      </S.Files>
    </S.Container>
  )
}
