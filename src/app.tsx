import { useFiles } from 'hooks'

import { Sidebar, ContentArea } from 'components'

import { AppStyles as S } from 'styles'

function App () {
  const {
    files,
    inputRef,
    handleAddNewFile,
    updateActiveFileName,
    updateActiveFileContent,
    updateActiveFileById,
    deleteFileById,
  } = useFiles()

  return (
    <S.Container>
      <Sidebar
        files={files}
        handleAddNewFile={handleAddNewFile}
        updateActiveFileById={updateActiveFileById}
        deleteFileById={deleteFileById}
      />
      <ContentArea
        inputRef={inputRef}
        file={files.find((file) => file.active)}
        updateActiveFileName={updateActiveFileName}
        updateActiveFileContent={updateActiveFileContent}
      />
    </S.Container>
  )
}

export { App }
