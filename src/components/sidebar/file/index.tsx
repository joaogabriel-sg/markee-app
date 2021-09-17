import { File as TypeFile } from 'resources/types/file.type'

import deleteIcon from 'resources/assets/delete-icon.svg'
import fileWhiteIcon from 'resources/assets/file-white-icon.svg'
import fileBlueIcon from 'resources/assets/file-blue-icon.svg'
import editingIcon from 'resources/assets/editing-icon.svg'
import savingIcon from 'resources/assets/saving-icon.svg'
import savedIcon from 'resources/assets/saved-icon.svg'

import * as S from './styles'

type FileProps = Omit<TypeFile, 'content'> & {
  deleteFileById: (id: string) => void
}

export function File ({ id, name, active, status, deleteFileById }: FileProps) {
  const currentFileIcon = active ? fileBlueIcon : fileWhiteIcon
  const currentStatusIcon = status === 'editing'
    ? editingIcon
    : status === 'saving'
      ? savingIcon
      : savedIcon

  const handleDeleteFile = () => {
    deleteFileById(id)
  }

  return (
    <S.Container key={id} isActive={active}>
      <S.Link href='/' title={`Arquivo ${name}`}>
        <S.FileIcon src={currentFileIcon} alt={`Arquivo ${name}`} />
        <S.Name>{name}</S.Name>
      </S.Link>
      {active
        ? (<S.StatusIcon src={currentStatusIcon} alt={`Status: ${status}`} />)
        : (
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
