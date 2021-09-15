import deleteIcon from 'assets/delete-icon.svg'
import fileWhiteIcon from 'assets/file-white-icon.svg'
import fileBlueIcon from 'assets/file-blue-icon.svg'
import editingIcon from 'assets/editing-icon.svg'
import savingIcon from 'assets/saving-icon.svg'
import savedIcon from 'assets/saved-icon.svg'

import * as S from './styles'

type FileProps = {
  id: string
  name: string
  active: boolean
  status: 'editing' |'saving' | 'saved'
}

export function File ({ id, name, active, status }: FileProps) {
  const currentFileIcon = active ? fileBlueIcon : fileWhiteIcon
  const currentStatusIcon = status === 'editing'
    ? editingIcon
    : status === 'saving'
      ? savingIcon
      : savedIcon

  return (
    <S.Container key={id} isActive={active}>
      <S.Link href='/' title={`Arquivo ${name}`}>
        <S.FileIcon src={currentFileIcon} alt={`Arquivo ${name}`} />
        <S.Name>{name}</S.Name>
      </S.Link>
      {active
        ? (<S.StatusIcon src={currentStatusIcon} alt={`Status: ${status}`} />)
        : (
          <S.DeleteButton type='button' title={`Remover o arquivo ${name}`}>
            <S.DeleteIcon src={deleteIcon} alt={`Deletar arquivo ${name}`} />
          </S.DeleteButton>
          )}
    </S.Container>
  )
}
