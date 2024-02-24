import * as React from 'react'

import { Description, Icon, Info, Name } from '../elements'
import { Suggestion } from '../types'
import { Emoji } from '@services/Emoji'
import { generalStore } from '@store'

const Emojis: Suggestion<Emoji> = {
  getSuggestions: query => generalStore.emojis.query(query),
  extract: query =>
    query.length > 2 &&
    query[0] === ':' &&
    query[1] !== ':' &&
    query.substring(1),

  toString: ({ keywords: [keyword] }) => `:${keyword}:`,

  description: query => (
    <Description className="description">
      Emoji
      {query ? (
        <React.Fragment>
          {` matching `}
          <strong>{`:${query}`}</strong>
        </React.Fragment>
      ) : null}
    </Description>
  ),

  suggestion: ({ category, emoji, keywords: [keyword] }) => (
    <React.Fragment>
      {category === 'custom' ? (
        <Icon src={`https://cdn.discordapp.com/emojis/${emoji}.png`} />
      ) : (
        <Icon>{emoji}</Icon>
      )}
      <Name className="name">{`:${keyword}:`}</Name>
      <Info className="info">{category}</Info>
    </React.Fragment>
  )
}

export default Emojis
