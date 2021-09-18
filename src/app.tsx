import { useFiles } from 'hooks/useFiles'

import { Sidebar } from './components/sidebar'
import { ContentArea } from 'components/content-area'

import * as S from './styles/app-styles'

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
