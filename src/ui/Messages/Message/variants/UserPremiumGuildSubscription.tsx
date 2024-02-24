import {Message_author} from "@generated";
import {
  IconsBase,
  SystemMessageBase,
  SystemMessageContentBase
} from "@ui/Messages/Message/elements";
import MessageAuthor from "@ui/Messages/Message/MessageAuthor";
import LargeTimestamp from "@ui/Messages/Message/LargeTimestamp";

interface UserPremiumGuildSubscriptionProps {
  createdAt: number;
  author: Message_author;
  content: string;
}

function UserPremiumGuildSubscription(props: UserPremiumGuildSubscriptionProps) {
  return (
    <SystemMessageBase>
      <IconsBase.Boost />
      <SystemMessageContentBase>
        <MessageAuthor author={props.author} onlyShowUsername={true} />{" "}
        just boosted the server
        {props.content !== ""
          && (<><strong>{props.content}</strong> times</>)
        }!
      </SystemMessageContentBase>
      <LargeTimestamp timestamp={props.createdAt} />
    </SystemMessageBase>
  );
}

export default UserPremiumGuildSubscription;
