import {Message_author} from "@generated";
import {
  IconsBase,
  SystemMessageBase,
  SystemMessageContentBase
} from "@ui/Messages/Message/elements";
import {MessageType} from "@generated/globalTypes";
import MessageAuthor from "@ui/Messages/Message/MessageAuthor";
import {generalStore} from "@store";
import {useMemo} from "react";
import LargeTimestamp from "@ui/Messages/Message/LargeTimestamp";

interface UserPremiumGuildTier2Props {
  createdAt: number;
  content: string;
  type: MessageType;
  author: Message_author;
}

function UserPremiumGuildTierUpgrade(props: UserPremiumGuildTier2Props) {
  const newLevel = useMemo(() => {
    switch (props.type) {
      case MessageType.UserPremiumGuildTier1:
        return 1;
      case MessageType.UserPremiumGuildTier2:
        return 2;
      case MessageType.UserPremiumGuildTier3:
        return 3;
      default:
        return -1;
    }
  }, [props.type]);

  return (
    <SystemMessageBase>
      <IconsBase.Boost />
      <SystemMessageContentBase>
        <MessageAuthor author={props.author} onlyShowUsername={true} />{" "}
        just boosted the server <strong>{props.content}</strong> time
        {props.content === "1" ? "" : "s"}!{" "}
        {generalStore.guild?.name} has achieved <strong>Level {newLevel}!</strong>
      </SystemMessageContentBase>
      <LargeTimestamp timestamp={props.createdAt} />
    </SystemMessageBase>
  );
}

export default UserPremiumGuildTierUpgrade;
