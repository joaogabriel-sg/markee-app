import styled, { keyframes } from 'styled-components'

import { EditingIcon as AssetsEditingIcon } from 'resources/assets'

const animateEditingIcon = keyframes`
  0%,
  100% {
    fill-opacity: 0.25;
  }
  50% {
    fill-opacity: 1;
  }
`

export const EditingIcon = styled(AssetsEditingIcon)`
  > circle {
    fill-opacity: 0.25;
    stroke: #1fc8e1;
    stroke-width: 1px;
    animation: ${animateEditingIcon} 0.5s linear infinite;
  }
`
