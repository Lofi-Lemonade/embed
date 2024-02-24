import styled from 'react-emotion'

export const Root = styled('img')`
  border-radius: 3px;
  max-width: 70vw;
  max-height: 70vh;
  user-select: none;
  display: block;
`

export const OpenImage = styled('a')`
  color: #fff;
  line-height: 30px;
  opacity: 0.5;
  transition: opacity 0.15s ease;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  user-select: none;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`
