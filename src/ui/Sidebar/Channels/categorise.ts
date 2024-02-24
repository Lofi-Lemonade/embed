import {ChannelInfo_channel_category, GuildInfo_guild_channels} from '@generated'

type Channel = GuildInfo_guild_channels & {
  pings?: number
}

export interface ICategory {
  name: string
  channels: Channel[]
  position: number;
}

const getPosition = (channel: GuildInfo_guild_channels) => {
  let position = channel.position
  if (channel.__typename === 'VoiceChannel')
    position += 50 // max channels in category
  return position
} 

const categorise = (
  channels: GuildInfo_guild_channels[]
): ICategory[] => {
  let indexes = new Map<string, number>()
  let categorised = new Array<ICategory>()

  const addChannel = (channel: GuildInfo_guild_channels) => {
    const category: ChannelInfo_channel_category = channel.category ? channel.category : { name: null, position: -1, __typename: 'Category'};

    const newCategory = {
      name: category?.name,
      channels: [channel],
      position: category?.position
    };

    // The channel belongs in a named category
    let index = indexes.get(category.name)

    // If the category already exists
    if (typeof index === 'number') {
      // Push the channel
      categorised[index].channels.push(channel)
    } else {
      // Create a new category
      index = categorised.push(newCategory) - 1
      indexes.set(category.name, index)
    }
  }

  // Display non-voice channels first, then voice channels
  channels.filter(c => c.__typename !== 'VoiceChannel').forEach(addChannel)
  channels.filter(c => c.__typename === 'VoiceChannel').forEach(addChannel)

  return categorised.sort((a, b) => a.position-b.position)
}

export default categorise
