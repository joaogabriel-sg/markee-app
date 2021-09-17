import { useFiles } from 'hooks/useFiles'

import { Sidebar } from './components/sidebar'
import { ContentArea } from 'components/content-area'

import * as S from './styles/app-styles'

function App () {
  const {
    files,
    inputRef,
    handleAddNewFile,
    changeCurrentFilename,
    changeCurrentContent,
    changeFileById,
    deleteFileById,
  } = useFiles()

  return (
    <S.Container>
      <Sidebar
        files={files}
        handleAddNewFile={handleAddNewFile}
        changeFileById={changeFileById}
        deleteFileById={deleteFileById}
      />
      <ContentArea
        inputRef={inputRef}
        currentFile={files.find((file) => file.active)}
        changeCurrentFilename={changeCurrentFilename}
        changeCurrentContent={changeCurrentContent}
      />
    </S.Container>
  )
}

export { App }
