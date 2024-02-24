import {IconsBase, SystemMessageLinkBase, SystemMessageBase, SystemMessageContentBase} from "../elements";
import {Message_author} from "@generated";
import MessageAuthor from "@ui/Messages/Message/MessageAuthor";
import {generalStore} from "@store";
import {useCallback} from "react";
import LargeTimestamp from "@ui/Messages/Message/LargeTimestamp";

interface ChannelPinnedMessageProps {
  author: Message_author;
  createdAt: number;
}

function ChannelPinnedMessage(props: ChannelPinnedMessageProps) {
  const openPinnedMessage = useCallback(() => generalStore.togglePins(true), [])

  return (
    <SystemMessageBase>
      <IconsBase.Pinned />
      <SystemMessageContentBase>
        <MessageAuthor author={props.author} onlyShowUsername={true} />{" "}
        pinned a message to this channel.
        See all{" "}
        <SystemMessageLinkBase onClick={openPinnedMessage}>
          pinned messages
        </SystemMessageLinkBase>
        .
        <LargeTimestamp timestamp={props.createdAt} />
      </SystemMessageContentBase>
    </SystemMessageBase>
  );
}

export default ChannelPinnedMessage;
