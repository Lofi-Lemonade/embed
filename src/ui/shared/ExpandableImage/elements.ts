import { Scale } from '@ui/shared/ScaledImage'
import styled from '@lib/emotion'

import { Loading } from '@ui/Overlays'

interface Props {
  scale: Scale
}

export const Root = styled('div')<Props>`
  position: relative;
  ${({ scale }) => scale.css};
`

export const Image = styled('img')`
  width: 100%;
  height: auto;
  border-radius: 3px;
`

export const Loader = styled(Loading)`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
`
