import * as React from "react";
import {PureComponent} from "react";
import {
  AuthorBase,
  AvatarBase,
  UsernameBase
} from "@ui/Messages/Message/elements";
import {
  GuildInfo_guild_roles,
  Message_author
} from "@generated";
import {memoize} from "lodash";
import ChatTag from "@ui/Messages/ChatTag";
import {generalStore} from "@store";
import RoleIcon from "@ui/Messages/Message/RoleIcon";
import getAvatar from "@utils/getAvatar";

interface MessageAuthorProps {
  author: Message_author;
  avatarAnimated?: boolean;
  onlyShowUsername?: boolean;
  isGuest?: boolean;
  crosspost?: boolean;
  referenceGuild?: string;
}

export const convertColor = memoize(
  (color: number) =>
    color > 0 ? `#${color.toString(16).padStart(6, '0')}` : undefined
);

export const getDominantRoleColor = memoize(
  (roleIds: string[] | null): number | null => {
    if (roleIds === null) return null;

    const [role] = roleIds
      .map(id => generalStore.guild?.roles.find(r => r.id === id))
      .filter(r => r !== undefined && r.color !== 0)
      .sort((a, b) => b.position - a.position);

    return role?.color ?? null;
  }
);

class MessageAuthor extends PureComponent<MessageAuthorProps> {
  private getDominantRoleIconRole = memoize(
    (roleIds: string[] | null): GuildInfo_guild_roles | null => {
      if (roleIds === null) return null;

      const [role] = roleIds
        .map(id => generalStore.guild?.roles.find(r => r.id === id))
        .filter(r => r !== undefined && (r.icon !== null || r.unicodeEmoji !== null))
        .sort((a, b) => b.position - a.position);

      // Fall back to null if the role is undefined.
      // This can happen if the role wasn't provided with the guild, but was on the user
      // or no role the user has had an icon or unicode emoji.
      return role ?? null;
    }
  );

  render() {
    // Gets the dominant role color
    const dominantRoleColor = getDominantRoleColor(this.props.author.roles);
    const color = convertColor(dominantRoleColor ?? 0);

    // Gets the dominant role icon
    const dominantRoleIconRole = this.getDominantRoleIconRole(this.props.author.roles);

    if (this.props.onlyShowUsername)
      return (
        <AuthorBase>
          <UsernameBase color={color}>
            {this.props.author.name}
          </UsernameBase>
        </AuthorBase>
      );

    return (
      <AuthorBase>
        <AvatarBase
          src={getAvatar(this.props.author, {animated: this.props.avatarAnimated ?? false})}
          draggable={false}
        />
        <UsernameBase color={color}>
          {this.props.author.name}
        </UsernameBase>
        {dominantRoleIconRole !== null && (
          <RoleIcon role={dominantRoleIconRole} />
        )}
        <ChatTag
          author={this.props.author}
          crosspost={this.props.crosspost}
          referenceGuild={this.props.referenceGuild}
          guest={this.props.isGuest}
        />
      </AuthorBase>
    );
  }
}

export default MessageAuthor;
