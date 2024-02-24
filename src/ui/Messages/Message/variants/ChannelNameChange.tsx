import {Message_author} from "@generated";
import { SystemMessageBase, IconsBase, SystemMessageContentBase } from "../elements";
import MessageAuthor from "@ui/Messages/Message/MessageAuthor";
import LargeTimestamp from "@ui/Messages/Message/LargeTimestamp";

interface ChannelNameChangeProps {
  content: string;
  createdAt: number;
  author: Message_author;
}

function ChannelNameChange(props: ChannelNameChangeProps) {
  return (
    <SystemMessageBase>
      <IconsBase.ThreadNameChanged />
      <SystemMessageContentBase fullPrimary>
        <MessageAuthor author={props.author} onlyShowUsername={true} />{" "}
        changed the channel name:{" "}
        <strong>{props.content}</strong>
      </SystemMessageContentBase>
      <LargeTimestamp timestamp={props.createdAt} />
    </SystemMessageBase>
  );
}

export default ChannelNameChange;
