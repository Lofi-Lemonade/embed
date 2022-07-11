import {Message as MessageData} from "@generated";
import {MessageType} from "@generated/globalTypes";
import NormalMessage from "@ui/Messages/Message/variants/NormalMessage";
import GuildMemberJoin from "@ui/Messages/Message/variants/GuildMemberJoin";
import {memo} from "react";
import ChannelPinnedMessage
  from "@ui/Messages/Message/variants/ChannelPinnedMessage";
import MessageContainer, {
  MessageButtonListOption
} from "@ui/Messages/Message/MessageContainer";
import copyIdIcon from "@images/discordAssets/3fef4f31f944477f5f3e9643cbcaab7a.svg"
import linkIcon from "@images/discordAssets/a4c2ef2964ee9977baf61a2f6017b93d.svg";
import {useRouter} from "@hooks";

interface MessageProps {
  isFirstMessage?: boolean;
  message: MessageData;
  isHovered?: boolean;
  showButtons?: boolean;
}

function MessageTypeSwitch(props: Omit<MessageProps, "showButtons">) {
  switch (props.message.type) {
    case MessageType.ChannelPinnedMessage:
      return (
        <ChannelPinnedMessage
          createdAt={props.message.createdAt}
          author={props.message.author}
        />
      );
    case MessageType.GuildMemberJoin:
      return (
        <GuildMemberJoin
          createdAt={props.message.createdAt}
          author={props.message.author}
        />
      );
    case MessageType.Reply:
    case MessageType.Default:
      return <NormalMessage {...props} />;
    default: {
      const errorMessage: MessageData = {
        ...props.message,
        type: MessageType.Default,
        content: `Unknown message type \`${props.message.type}\`\n\n\`\`\`json\n${JSON.stringify(props.message, null, 2)}\n\`\`\``
      };

      return (
        <NormalMessage
          message={errorMessage}
          isFirstMessage={props.isFirstMessage}
          isHovered={props.isHovered}
        />
      );
    }
  }
}

function Message(props: MessageProps) {
  const {channel: channelId, guild: guildId} = useRouter();

  const buttonOptions: MessageButtonListOption[] = [
    {
      icon: linkIcon,
      onClick: () => {
        const messageLink = `https://discord.com/channels/${guildId}/${channelId}/${props.message.id}`;

        navigator.clipboard.writeText(messageLink);
      },
      actionDescription: "Copy Message Link"
    },
    {
      icon: copyIdIcon,
      onClick: () => navigator.clipboard.writeText(props.message.id),
      actionDescription: "Copy Message ID"
    }
  ];

  if (props.showButtons)
    return (
      <MessageContainer buttons={buttonOptions}>
        <MessageTypeSwitch {...props} />
      </MessageContainer>
    );

  return <MessageTypeSwitch {...props} />;
}

export default memo(Message);
