import { Scale } from '@ui/shared/ScaledImage'
import styled from '@lib/emotion'

import {css} from "react-emotion";

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

export const Error = css`
  object-fit: none;
  background-color: rgba(0, 0, 0, 0.2);
`;
