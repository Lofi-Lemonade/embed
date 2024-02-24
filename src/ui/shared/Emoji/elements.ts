import styled, { css } from '@lib/emotion'

export const Base = css`
  object-fit: contain;
  -webkit-user-drag: none;
  width: 1.375em;
  height: 1.375em;
  vertical-align: middle;
`

export const Emote = styled('img')`
  ${Base};
`
