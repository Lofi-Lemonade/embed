import {
  IconsBase,
  SystemMessageBase,
  SystemMessageContentBase,
  UsernameBase
} from "../elements";
import {Message_author, Message_mentions} from "@generated";
import MessageAuthor from "@ui/Messages/Message/MessageAuthor";
import LargeTimestamp from "@ui/Messages/Message/LargeTimestamp";

interface RecipientAddProps {
  createdAt: number;
  author: Message_author;
  target: Message_mentions;
}

function RecipientAdd(props: RecipientAddProps) {
  return (
    <SystemMessageBase>
      <IconsBase.Add />
      <SystemMessageContentBase>
        <MessageAuthor author={props.author} onlyShowUsername={true} />{" "}
        added{" "}
        <UsernameBase color={undefined}>
          {props.target.name}
        </UsernameBase>{" "}
        to the thread.
      </SystemMessageContentBase>
      <LargeTimestamp timestamp={props.createdAt} />
    </SystemMessageBase>
  );
}

export default RecipientAdd;
