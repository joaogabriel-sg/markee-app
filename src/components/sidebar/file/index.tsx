import { MouseEvent } from 'react'

import { File as TypeFile } from 'resources/types'

import {
  FileBlueIcon,
  FileWhiteIcon,
  DeleteIcon,
} from 'resources/assets'

import { StatusEditing, StatusSaving, StatusSaved } from 'components'

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
  const StatusIcon = {
    editing: StatusEditing,
    saving: StatusSaving,
    saved: StatusSaved,
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
        {active ? <FileBlueIcon /> : <FileWhiteIcon />}
        <S.Name>{name}</S.Name>
      </S.Link>

      {active && <StatusIcon />}

      {!active && (
        <S.DeleteButton
          type='button'
          onClick={handleDeleteFile}
          title={`Remover o arquivo ${name}`}
        >
          <DeleteIcon />
        </S.DeleteButton>
      )}
    </S.Container>
  )
}
