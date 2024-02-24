import * as React from 'react'
import Wrapper from '@ui/Wrapper'
import { Header, Fallback } from './Header'
import { Chat } from '@ui/Chat'
import { Loading } from '@ui/Overlays'
import { observer } from "mobx-react";
import { useEffect } from "react";
import {generalStore, settingsStore} from "@store";
import { useRouter } from '@hooks'
import Messages2ElectricBoogaloo
  from "@views/Messages/Messages2ElectricBoogaloo";
import {Messages} from "@views/Messages/Messages";
import Forum from '@ui/Forum'
import { useQuery } from 'react-apollo-hooks'
import { ChannelType, ChannelTypeVariables } from '@generated'
import CHANNEL_TYPE from './ChannelType.graphql'

const MessagesView = observer(() => {
  const { guild, channel } = useRouter()

  useEffect(() => {
    generalStore.clearThread(); // Channel changed, cant be looking at a thread anymore
    generalStore.readChannel(channel)
  }, [channel]);

  const knownChannelType = generalStore.guild?.channels?.find(c => c.id === channel)?.__typename;

  const { data, error } = useQuery<ChannelType, ChannelTypeVariables>(CHANNEL_TYPE, { skip: !!knownChannelType, variables: { guild, channel } });

  const channelType = knownChannelType || data?.channel?.__typename || (error ? 'TextChannel' : null)

  if (!channelType) return <Loading />

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      {!(generalStore.activeThread && generalStore.threadFullscreen) && (
        <Wrapper hideOnMobile={Boolean(generalStore.activeThread)}>
          <React.Suspense fallback={<Fallback />}>
            <Header channel={channel} guild={guild}/>
          </React.Suspense>

          <React.Suspense fallback={<Loading />}>
            {channelType === 'ForumChannel' ? (
              <Forum guild={guild} channel={channel} />
            ) : settingsStore.messageViewRewriteEnabled ? (
              <Messages2ElectricBoogaloo guild={guild} channel={channel} />
            ) : (
              <Messages guild={guild} channel={channel} />
            )}
          </React.Suspense>
          {channelType === 'ForumChannel' || <Chat />}
        </Wrapper>
      )}

      {generalStore.activeThread && (
        // TODO: I should use a context here realistically, rather than passing thread deep down various components
        <Wrapper threadFullscreen={generalStore.threadFullscreen}>
          <React.Suspense fallback={<Fallback />}>
            <Header channel={channel} guild={guild} thread />
          </React.Suspense>

          <React.Suspense fallback={<Loading />}>
            {settingsStore.messageViewRewriteEnabled ? (
              <Messages2ElectricBoogaloo guild={guild} channel={channel} thread />
            ) : (
              <Messages guild={guild} channel={channel} thread />
            )}
          </React.Suspense>
          <Chat thread />
        </Wrapper>
      )}
    </div>
  )
})

export default MessagesView;
