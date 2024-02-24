import { generalStore } from '@store'
import autobind from 'autobind-decorator'
import { observer } from 'mobx-react'
import * as React from 'react'

import { ICategory } from '../categorise'
import Channel from './Channel'
import { Collapse, Emoji, Expand, Name, Root, Text } from './elements'

interface Props {
  category: ICategory
  activeChannel: string
  index: number
}

@observer
class Category extends React.PureComponent<Props> {
  state = {
    open: true
  };

  @autobind
  toggle() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { category, activeChannel } = this.props;

    return (
      <Root className="category">
        {category.name && (
          <Name onClick={this.toggle}>
            {this.state.open ? <Collapse /> : <Expand />}
            <Text>
              <Emoji>{category.name}</Emoji>
            </Text>
          </Name>
        )}

        {category.channels.map(({ name, id, nsfw = false, __typename, pings = 0 /*unread*/ }, order) => {
          const unread = generalStore.unreadChannels.has(id);
          const selected = activeChannel === id;

          return this.state.open || selected || unread ? (
            <Channel
              key={id}
              {...{
                __typename,
                id,
                name,
                order,
                unread,
                selected,
                nsfw,
                pings
              }}
            />
          ) : null
        })}
      </Root>
    )
  }
}
export default Category
