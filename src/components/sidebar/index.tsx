import { File as TypeFile } from 'resources/types/file.type'

import { File } from 'components/sidebar/file'

import * as S from './styles'

type SidebarProps = {
  files: TypeFile[]
  handleAddNewFile: () => void
  updateActiveFileById: (id: string) => void
  deleteFileById: (id: string) => void
}

export function Sidebar ({
  files,
  handleAddNewFile,
  updateActiveFileById,
  deleteFileById,
}: SidebarProps) {
  return (
    <S.Container>
      <S.Logo />

      <S.Title>Arquivos</S.Title>

      <S.AddFileButton type='button' onClick={handleAddNewFile}>
        <S.PlusIcon />
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
            updateActiveFileById={updateActiveFileById}
            deleteFileById={deleteFileById}
          />
        ))}
      </S.Files>
    </S.Container>
  )
}
