import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { File } from 'resources/types/file.type'

import { Sidebar } from './components/sidebar'
import { ContentArea } from 'components/content-area'

import * as S from './styles/app-styles'

function App () {
  const [files, setFiles] = useState<File[]>([])
  const [currentFile, setCurrentFile] = useState<File>({} as File)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (files.length > 0) {
      const activeFile =
        files.find((file) => file.active === true) ?? files[files.length - 1]

      setCurrentFile(activeFile)
      inputRef.current?.focus()
    }
  }, [files])

  const handleAddNewFile = () => {
    setFiles((prevFiles) => {
      const prevFilesDisabled = prevFiles.map(
        (prevFile) => ({ ...prevFile, active: false }),
      )

      return [
        ...prevFilesDisabled,
        {
          id: uuidv4(),
          name: 'Sem título',
          content: '',
          active: true,
          status: 'saved',
        },
      ]
    })
  }

  const changeCurrentFilename = (newFilename: string) => {
    setFiles((prevFiles) =>
      prevFiles.map((prevFile) =>
        prevFile.id === currentFile.id
          ? { ...prevFile, name: newFilename }
          : prevFile,
      ),
    )
  }

  return (
    <S.Container>
      <Sidebar files={files} handleAddNewFile={handleAddNewFile} />
      <ContentArea
        inputRef={inputRef}
        currentFile={currentFile}
        changeCurrentFilename={changeCurrentFilename}
      />
    </S.Container>
  )
}

export { App }
