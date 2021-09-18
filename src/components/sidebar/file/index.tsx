import { MouseEvent } from 'react'

import { File as TypeFile } from 'resources/types/file.type'

import deleteIcon from 'resources/assets/delete-icon.svg'
import fileWhiteIcon from 'resources/assets/file-white-icon.svg'
import fileBlueIcon from 'resources/assets/file-blue-icon.svg'
import editingIcon from 'resources/assets/editing-icon.svg'
import savingIcon from 'resources/assets/saving-icon.svg'
import savedIcon from 'resources/assets/saved-icon.svg'

import * as S from './styles'

type FileProps = Omit<TypeFile, 'content'> & {
  updateActiveFileById: (id: string) => void
  deleteFileById: (id: string) => void
}

export function File ({
  id,
  name,
  active,
  status,
  updateActiveFileById,
  deleteFileById,
}: FileProps) {
  const currentFileIcon = active ? fileBlueIcon : fileWhiteIcon
  const currentStatusIcon = {
    editing: editingIcon,
    saving: savingIcon,
    saved: savedIcon,
  }[status]

  const handleChangeFile = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    updateActiveFileById(id)
  }

  const handleDeleteFile = () => {
    deleteFileById(id)
  }

  return (
    <S.Container key={id} isActive={active}>
      <S.Link href={`/file/${id}`} onClick={handleChangeFile} title={`Arquivo ${name}`}>
        <S.FileIcon src={currentFileIcon} alt={`Arquivo ${name}`} />
        <S.Name>{name}</S.Name>
      </S.Link>

      {active && (
        <S.StatusIcon
          src={currentStatusIcon}
          alt={`Status: ${status}`}
          title={`Status: ${status}`}
          isSaving={status === 'saving'}
        />
      )}

      {!active && (
        <S.DeleteButton
          type='button'
          onClick={handleDeleteFile}
          title={`Remover o arquivo ${name}`}
        >
          <S.DeleteIcon src={deleteIcon} alt={`Deletar arquivo ${name}`} />
        </S.DeleteButton>
      )}
    </S.Container>
  )
}
