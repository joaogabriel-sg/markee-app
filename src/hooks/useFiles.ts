import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { File } from 'resources/types/file.type'

export function useFiles () {
  const [files, setFiles] = useState<File[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const activeFile = files.find((file) => file.active)

    if (!!files.length && !!activeFile && activeFile.status !== 'editing') {
      return
    }

    const idTimeoutSavingStatus = setTimeout(() => {
      setFiles((prevFiles) => prevFiles.map<File>((prevFile) =>
        prevFile.active
          ? { ...prevFile, status: 'saving' }
          : prevFile,
      ))

      const idTimeoutSavedStatus = setTimeout(() => {
        setFiles((prevFiles) => prevFiles.map<File>((prevFile) =>
          prevFile.active
            ? { ...prevFile, status: 'saved' }
            : prevFile,
        ))
        clearTimeout(idTimeoutSavedStatus)
      }, 300)
    }, 300)

    return () => clearTimeout(idTimeoutSavingStatus)
  }, [files])

  const handleAddNewFile = () => {
    inputRef.current?.focus()

    setFiles((prevFiles) => {
      const prevFilesDisabled = prevFiles.map<File>((prevFile) => ({
        ...prevFile,
        active: false,
      }))
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
    setFiles((prevFiles) => prevFiles.map<File>((prevFile) =>
      prevFile.active
        ? { ...prevFile, name: newFilename, status: 'editing' }
        : prevFile,
    ))
  }

  const changeCurrentContent = (newContent: string) => {
    setFiles((prevFiles) => prevFiles.map<File>((prevFile) =>
      prevFile.active
        ? { ...prevFile, content: newContent, status: 'editing' }
        : prevFile,
    ))
  }

  const changeFileById = (id: string) => {
    const newActiveFile = files.find((file) => file.id === id)
    if (!newActiveFile) return

    inputRef.current?.focus()
    setFiles((prevFiles) => prevFiles.map<File>((prevFile) =>
      prevFile.id === id
        ? { ...newActiveFile, active: true }
        : { ...prevFile, active: false, status: 'saved' },
    ))
  }

  const deleteFileById = (id: string) => {
    setFiles((prevFiles) => prevFiles.filter(
      (prevFile) => prevFile.id !== id,
    ))
  }

  return {
    files,
    inputRef,
    handleAddNewFile,
    changeCurrentFilename,
    changeCurrentContent,
    changeFileById,
    deleteFileById,
  }
}
