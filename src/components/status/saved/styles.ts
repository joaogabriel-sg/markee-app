import styled, { keyframes } from 'styled-components'

import { SavedIcon as AssetsSavedIcon } from 'resources/assets'

const animateSavedIcon = keyframes`
  0% {
    stroke-dashoffset: -25;
  }
  100% {
    stroke-dashoffset: 0;
  }
`

export const SavedIcon = styled(AssetsSavedIcon)`
  stroke-dashoffset: -25;
  stroke-dasharray: 25;

  animation: ${animateSavedIcon} 0.5s linear forwards;
`
