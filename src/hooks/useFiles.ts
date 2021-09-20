import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import localforage from 'localforage'

import { File } from 'resources/types/file.type'

const markeeAppLocalForageKey = '@MarkeeApp:files'

export function useFiles () {
  const [files, setFiles] = useState<File[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    async function getFilesInLocalForage () {
      const localFiles = await localforage.getItem<File[]>(markeeAppLocalForageKey)

      if (localFiles !== null && localFiles.length > 0) {
        setFiles(localFiles)
        return
      }

      handleAddNewFile()
    }

    getFilesInLocalForage()
  }, [])

  useEffect(() => {
    localforage.setItem(markeeAppLocalForageKey, files)
  }, [files])

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    function updateFileStatus () {
      const activeFile = files.find((file) => file.active)

      if (!files.length || !activeFile || activeFile.status !== 'editing') {
        return
      }

      timeoutId = setTimeout(() => {
        updateActiveFile({ status: 'saving' })

        const idTimeoutSavedStatus = setTimeout(() => {
          updateActiveFile({ status: 'saved' })
          clearTimeout(idTimeoutSavedStatus)
        }, 300)
      }, 300)
    }

    updateFileStatus()

    return () => clearTimeout(timeoutId)
  }, [files])

  useEffect(() => {
    const activeFile = files.find((file) => file.active)

    if (activeFile) {
      window.history.replaceState(null, '', `/file/${activeFile.id}`)
    }
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

  const updateActiveFile = (updatedPropertiesInActiveFile: Partial<File>) => {
    setFiles((prevFiles) => prevFiles.map<File>((prevFile) =>
      prevFile.active
        ? { ...prevFile, ...updatedPropertiesInActiveFile }
        : prevFile,
    ))
  }

  const updateActiveFileName = (newFileName: string) => {
    updateActiveFile({ name: newFileName, status: 'editing' })
  }

  const updateActiveFileContent = (newFileContent: string) => {
    updateActiveFile({ content: newFileContent, status: 'editing' })
  }

  const updateActiveFileById = (id: string) => {
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
    updateActiveFileName,
    updateActiveFileContent,
    updateActiveFileById,
    deleteFileById,
  }
}
