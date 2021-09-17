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
    setFiles((prevFiles) => prevFiles.map(
      (prevFile) => prevFile.id === currentFile.id
        ? currentFile
        : prevFile,
    ))

    if (currentFile.status !== 'saved') {
      const savingStatusTimeoutId = setTimeout(() => {
        setCurrentFile((prevCurrentFile) => ({
          ...prevCurrentFile,
          status: 'saving',
        }))

        const savedStatusTimeoutId = setTimeout(() => {
          setCurrentFile((prevCurrentFile) => ({
            ...prevCurrentFile,
            status: 'saved',
          }))
          clearTimeout(savedStatusTimeoutId)
        }, 300)
      }, 300)

      return () => clearTimeout(savingStatusTimeoutId)
    }
  }, [currentFile])

  const handleAddNewFile = () => {
    const newFile: File = {
      id: uuidv4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }

    inputRef.current?.focus()
    setFiles((prevFiles) => {
      const prevFilesDisabled = prevFiles.map((prevFile) => ({
        ...prevFile,
        active: false,
      }))
      return [...prevFilesDisabled, newFile]
    })
    setCurrentFile(newFile)
  }

  const changeCurrentFilename = (newFilename: string) => {
    setCurrentFile((prevCurrentFile) => ({
      ...prevCurrentFile,
      name: newFilename,
      status: 'editing',
    }))
  }

  const changeCurrentContent = (newContent: string) => {
    setCurrentFile((prevCurrentFile) => ({
      ...prevCurrentFile,
      content: newContent,
      status: 'editing',
    }))
  }

  return (
    <S.Container>
      <Sidebar files={files} handleAddNewFile={handleAddNewFile} />
      <ContentArea
        inputRef={inputRef}
        currentFile={currentFile}
        changeCurrentFilename={changeCurrentFilename}
        changeCurrentContent={changeCurrentContent}
      />
    </S.Container>
  )
}

export { App }
