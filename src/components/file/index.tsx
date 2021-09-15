import deleteIcon from 'assets/delete-icon.svg'
import fileWhiteIcon from 'assets/file-white-icon.svg'
import fileBlueIcon from 'assets/file-blue-icon.svg'

import * as S from './styles'

type FileProps = {
  id: string
  name: string
  active: boolean
}

export function File ({ id, name, active }: FileProps) {
  const currentFileIcon = active ? fileBlueIcon : fileWhiteIcon

  return (
    <S.Container key={id} isActive={active}>
      <S.Link href='/' title={`Arquivo ${name}`}>
        <S.FileIcon src={currentFileIcon} alt={`Arquivo ${name}`} />
        <S.Name>{name}</S.Name>
      </S.Link>
      <S.DeleteButton type='button' title={`Remover o arquivo ${name}`}>
        <S.DeleteIcon src={deleteIcon} alt={`Deletar arquivo ${name}`} />
      </S.DeleteButton>
    </S.Container>
  )
}
