import { useState, RefObject } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { File as TypeFile } from 'resources/types/file.type'

import { File } from 'components/sidebar/file'

import logoImg from 'resources/assets/logo.svg'
import plusIcon from 'resources/assets/plus-symbol.svg'

import * as S from './styles'

type SidebarProps = {
  inputRef: RefObject<HTMLInputElement>
}

export function Sidebar ({ inputRef }: SidebarProps) {
  const [files, setFiles] = useState<TypeFile[]>([])

  const handleAddNewFile = () => {
    const newFile: TypeFile = {
      id: uuidv4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }

    inputRef.current?.focus()

    setFiles((prevFiles) => {
      const prevFilesDisabled = prevFiles.map(
        (prevFile) => ({ ...prevFile, active: false }),
      )

      return [...prevFilesDisabled, newFile]
    })
  }

  return (
    <S.Container>
      <S.LogoImg src={logoImg} alt='Markee App' title='Markee App' />

      <S.Title>Arquivos</S.Title>

      <S.AddFileButton type='button' onClick={handleAddNewFile}>
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
