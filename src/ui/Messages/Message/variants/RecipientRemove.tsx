import {
  IconsBase,
  SystemMessageBase,
  SystemMessageContentBase,
  UsernameBase
} from "../elements";
import {Message_author, Message_mentions} from "@generated";
import MessageAuthor from "@ui/Messages/Message/MessageAuthor";
import LargeTimestamp from "@ui/Messages/Message/LargeTimestamp";

interface RecipientRemoveProps {
  createdAt: number;
  author: Message_author;
  target: Message_mentions;
}

function RecipientRemove(props: RecipientRemoveProps) {
  return (
    <SystemMessageBase>
      <IconsBase.Remove />
      <SystemMessageContentBase>
        <MessageAuthor author={props.author} onlyShowUsername={true} />{" "}
        removed{" "}
        <UsernameBase color={undefined}>
          {props.target.name}
        </UsernameBase>{" "}
        from the thread.
      </SystemMessageContentBase>
      <LargeTimestamp timestamp={props.createdAt} />
    </SystemMessageBase>
  );
}

export default RecipientRemove;
