import deleteIcon from 'assets/delete-icon.svg'
import fileWhiteIcon from 'assets/file-white-icon.svg'

import * as S from './styles'

type FileProps = {
  id: string
  name: string
}

export function File ({ id, name }: FileProps) {
  return (
    <S.Container key={id}>
      <S.Link href='/' title={`Arquivo ${name}`}>
        <S.FileIcon src={fileWhiteIcon} alt={`Arquivo ${name}`} />
        <S.Name>{name}</S.Name>
      </S.Link>
      <S.DeleteButton type='button' title={`Remover o arquivo ${name}`}>
        <S.DeleteIcon src={deleteIcon} alt={`Deletar arquivo ${name}`} />
      </S.DeleteButton>
    </S.Container>
  )
}
