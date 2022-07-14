import {IconsBase, SystemMessageLinkBase, SystemMessageBase, SystemMessageContentBase} from "../elements";
import {Message_author} from "@generated";
import MessageAuthor from "@ui/Messages/Message/MessageAuthor";
import Tooltip from "rc-tooltip";
import {Twemoji} from "@ui/shared/Emoji/emoji";
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
        pinned{" "}
        <Tooltip overlay={<>Coming Eventually<Twemoji>™</Twemoji></>} placement="top">
          <SystemMessageLinkBase cursor="not-allowed">
            a message
          </SystemMessageLinkBase>
        </Tooltip>
        {" "}
        to this channel.
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
