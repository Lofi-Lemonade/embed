import {Message_author} from "@generated";
import {IconsBase, SystemMessageLinkBase, SystemMessageBase, SystemMessageContentBase} from "../elements";
import MessageAuthor from "@ui/Messages/Message/MessageAuthor";
import LargeTimestamp from "@ui/Messages/Message/LargeTimestamp";

interface ChannelFollowAddProps {
  content: string;
  author: Message_author;
  createdAt: number;
}

function ChannelFollowAdd(props: ChannelFollowAddProps) {
  return (
    <SystemMessageBase>
      <IconsBase.Add />
      <SystemMessageContentBase>
        <MessageAuthor author={props.author} onlyShowUsername={true} />{" "}
        has added{" "}
        <SystemMessageLinkBase cursor="not-allowed">
          {props.content}
        </SystemMessageLinkBase>{" "}
        to this channel. It's most important updates will show up here.
        <LargeTimestamp timestamp={props.createdAt} />
      </SystemMessageContentBase>
    </SystemMessageBase>
  )
}

export default ChannelFollowAdd;
