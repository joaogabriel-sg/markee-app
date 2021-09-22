import styled, { keyframes } from 'styled-components'

import { SavingIcon as AssetsSavingIcon } from 'resources/assets'

const animateSavingIcon = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const SavingIcon = styled(AssetsSavingIcon)`
  animation: ${animateSavingIcon} 1s infinite linear;
`
