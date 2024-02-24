import styled from '@lib/emotion'

export const Link = styled('a')`
  & code {
    color: inherit;
  }
`

export const Edited = styled('span')`
  font-size: 0.625rem;
  line-height: 0.625rem;
  margin-left: 3px;
  opacity: 0.3;
`

export const QuoteContainer = styled('div')`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`

export const QuoteBar = styled('div')`
  margin: 8px 0;
  width: 4px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, .13);
`

const Heading = styled('p')`
  margin: 16px 0 8px;
  font-weight: 700;
  
  &:first-child {
    margin-top: 8px;
  }
`

export const Heading1 = styled(Heading)`
  font-size: 24px;
`

export const Heading2 = styled(Heading)`
  font-size: 20px;
`

export const Heading3 = styled(Heading)`
  font-size: 16px;
`

export const Quote = styled('blockquote')`
  padding: 0 8px 0 12px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-indent: 0;
  margin: 8px 0;
  max-width: 90%;
`

export { Code } from './code'
export { default as Highlighter } from './code/loader'
export { Channel, Mention, Role } from './mentions'