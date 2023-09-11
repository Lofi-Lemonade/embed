import {useMessages} from "@hooks";
import {generalStore} from "@store";
import {addNotification} from "notify";
import {Locale} from "@lib/Locale";
import {formatError, groupMessages} from "@views/Messages/utils";
import ErrorAhoy from "@ui/Overlays/ErrorAhoy";
import {Info, Loading, NoMessages} from "@ui/Overlays";
import {useCallback, useMemo, useState} from "react";
import {MessagesWrapper, ScrollerSpacer} from "@views/Messages/elements";
import { Virtuoso } from "react-virtuoso";
import MessageGroup from "@ui/Messages";
import useResizeAware from 'react-resize-aware';

const maxMessagesToLoad = 30;

interface MessagesProps {
  guild: string;
  channel: string;
  thread?: boolean;
}

function Messages2ElectricBoogaloo({ guild, channel, thread = false }: MessagesProps) {
  const { messages, error, ready, stale, fetchMore } = useMessages(
    channel,
    guild,
    thread ? generalStore.activeThread.id : null
  );

  const groupedMessages = useMemo(() => groupMessages(messages), [messages]);
  const [firstItemIndex, setFirstItemIndex] = useState(100000);
  const loadMoreMessages = useCallback(async () => {
    const { data } = await fetchMore({
      limit: maxMessagesToLoad,
      before: messages[0].id
    });

    setFirstItemIndex(firstItemIndex - groupMessages(data.channel.messageBunch.messages).length);
  }, [fetchMore, firstItemIndex, groupedMessages]);

  const [resizeListener, sizes] = useResizeAware();

  if (error) {
    addNotification({
      level: 'warning',
      title: Locale.translate('notif.loaderror.messages'),
      message: formatError(error),
      autoDismiss: 0,
    });

    return <ErrorAhoy message={formatError(error)} />;
  }

  if (!ready)
    return <Loading />;

  if (!groupedMessages.length)
    return (
      <NoMessages className="no-messages">
        <Info>{Locale.translate('nomessages')}</Info>
      </NoMessages>
    );

  return (
    <MessagesWrapper stale={stale}>
      {resizeListener}
      <Virtuoso
        data={groupedMessages}
        firstItemIndex={firstItemIndex}
        overscan={100}
        startReached={loadMoreMessages}
        initialTopMostItemIndex={maxMessagesToLoad - 1}
        alignToBottom={true}
        followOutput={(isAtBottom: boolean) => {
          if (isAtBottom) {
            return 'auto' // can be 'auto' or false to avoid scrolling
          }

          return false;
        }}
        atBottomThreshold={2}
        components={{
          Footer: () => <ScrollerSpacer />,
        }}
        itemContent={(index, messageGroup) => (
          <MessageGroup messages={messageGroup} key={messageGroup[0].id} thread={thread} scrollerWidth={sizes.width} />
        )}
      />
    </MessagesWrapper>
  );
}

export default Messages2ElectricBoogaloo;
