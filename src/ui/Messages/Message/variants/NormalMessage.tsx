import {memo, useMemo} from "react";
import {
  Message as MessageData,
  Message_interaction,
  Message_referencedMessage
} from "@generated";
import {
  MessageBase,
  MessageHeaderBase,
  MiniUserAvatarBase,
  MiniUserNameBase,
  ReplyInfoBase,
  ReplySpineBase,
  ReplyUserBase, SlashCommandBase,
  SmallTimestampBase,
  UnknownReplyIcon,
  UnknownReplyText
} from "@ui/Messages/Message/elements";
import MessageAuthor from "@ui/Messages/Message/MessageAuthor";
import Content from "@ui/Messages/Content";
import Moment from "moment";
import Tooltip from "rc-tooltip";
import {MessageType} from "@generated/globalTypes";
import getAvatar, {GetAvatarOptions} from "@utils/getAvatar";
import LargeTimestamp from "@ui/Messages/Message/LargeTimestamp";
import {authStore, generalStore} from "@store";
import ChatTag from "@ui/Messages/ChatTag";
import unknownReplyIcon from '@images/discordAssets/unknown-reply.svg';

interface ReplyInfoProps {
  referencedMessage: Message_referencedMessage | null;
  mentioned?: boolean;
  interaction: Message_interaction | null;
  isContextMenuInteraction?: boolean;
}

function getMiniAvatarUrl(
  referencedMessage: Message_referencedMessage | null,
  interaction: Message_interaction | null
) {
  const getAvatarSettings: GetAvatarOptions = {
    size: 16,
    animated: false
  }

  if (interaction !== null)
    return getAvatar(interaction.user, getAvatarSettings);

  if (referencedMessage !== null)
    return getAvatar(referencedMessage.author, getAvatarSettings);

  return null;
}

function getMiniUserName(
  referencedMessage: Message_referencedMessage | null,
  interaction: Message_interaction | null
) {
  if (interaction !== null)
    return interaction.user.username;

  if (referencedMessage !== null)
    return referencedMessage.author.name;

  return null;
}

function getDominantRoleColor(
  referencedMessage: Message_referencedMessage | null
) {
  if (referencedMessage !== null) {
    const roleIds = referencedMessage.author.roles ?? [];
    const [role] = roleIds
      .map(id => generalStore.guild?.roles.find(r => r.id === id))
      .filter(r => r !== undefined && r.color !== 0)
      .sort((a, b) => b.position - a.position);

    const colorHex = role?.color ?? null;
    return colorHex > 0
      ? `#${colorHex.toString(16).padStart(6, '0')}`
      : '#fff';
  }

  return null;
}

const ReplyInfo = memo((props: ReplyInfoProps) => {
  const miniAvatarUrl = useMemo(
    () => getMiniAvatarUrl(props.referencedMessage, props.interaction),
    [props.referencedMessage, props.interaction]
  );

  const miniUserName = useMemo(
    () => getMiniUserName(props.referencedMessage, props.interaction),
    [props.referencedMessage, props.interaction]
  );

  const miniUserNameColorHex = getDominantRoleColor(props.referencedMessage);

  const unknownReply = !props.referencedMessage && !props.interaction;

  return (
    <ReplyInfoBase>
      <ReplySpineBase />
      {unknownReply
        ? (
          <>
            <UnknownReplyIcon><img src={unknownReplyIcon} /></UnknownReplyIcon>
            <UnknownReplyText>Original message was deleted or is unknown.</UnknownReplyText>
          </>
        )
        : (
          <ReplyUserBase>
            <MiniUserAvatarBase src={miniAvatarUrl} />
            {props.referencedMessage && (
              <ChatTag
                author={props.referencedMessage.author}
                crosspost={!!(props.referencedMessage.flags & 1 << 1)}
                referenceGuild={props.referencedMessage.messageReference?.guildId}
                guest={props.referencedMessage.isGuest}
              />
            )}
            <MiniUserNameBase color={miniUserNameColorHex}>
              {props.mentioned && "@"}{miniUserName}
            </MiniUserNameBase>
          </ReplyUserBase>
        )}
      {props.referencedMessage
        ? (
          <Content
            message={props.referencedMessage}
            isReplyContent={true}
          />
        )
        : props.interaction && (
          <SlashCommandBase.Base>
            used{" "}
            <SlashCommandBase.Command>
              {!props.isContextMenuInteraction ? "/" : ""}
              {props.interaction.name}
            </SlashCommandBase.Command>
          </SlashCommandBase.Base>
        )
      }
    </ReplyInfoBase>
  );
});

type Message = Omit<MessageData, "referencedMessage"> & Partial<MessageData>;

interface MessageProps {
  isFirstMessage?: boolean;
  message: Message;
  isHovered?: boolean;
  noThreadButton?: boolean;
  isContextMenuInteraction?: boolean;
  hideTimestamp?: boolean;
}

function NormalMessage(props: MessageProps) {
  const shouldShowReply =
    props.message.type === MessageType.Reply || Boolean(props.message.interaction);

  const isUserMentioned = useMemo(() => {
    const user = authStore.user;

    if (!user)
      return false;

    if (!("_id" in user))
      return false;

    const userMentioned = props.message.mentions.find(
      mention => mention.id === user._id
    );

    return Boolean(userMentioned);
  }, [props.message.mentions]);

  if (props.isFirstMessage)
    return (
      <MessageBase isUserMentioned={isUserMentioned}>
        {shouldShowReply && (
          <ReplyInfo
            referencedMessage={props.message.referencedMessage ?? null}
            mentioned={props.message.mentions.some(m => m.id === props.message.referencedMessage?.author.id)}
            interaction={props.message.interaction}
            isContextMenuInteraction={props.isContextMenuInteraction}
          />
        )}
        <MessageHeaderBase>
          <MessageAuthor
            author={props.message.author}
            avatarAnimated={props.isHovered ?? false}
            isGuest={props.message.isGuest}
            crosspost={!!(props.message.flags & 1 << 1)}
            referenceGuild={props.message.messageReference?.guildId}
          />
          {props.hideTimestamp || <LargeTimestamp timestamp={props.message.createdAt} />}
        </MessageHeaderBase>
        <Content
          message={props.message}
          noThreadButton={props.noThreadButton}
        />
      </MessageBase>
    );

  return (
    <MessageBase isUserMentioned={isUserMentioned}>
      <Tooltip
        placement="top"
        overlay={Moment(props.message.createdAt).format("LLLL")}
        mouseEnterDelay={1}
      >
        <SmallTimestampBase dateTime={props.message.createdAt} className="short-time">
          {Moment(props.message.createdAt).format("h:mm A")}
        </SmallTimestampBase>
      </Tooltip>
      <Content
        message={props.message}
        noThreadButton={props.noThreadButton}
      />
    </MessageBase>
  );
}

export default NormalMessage;
