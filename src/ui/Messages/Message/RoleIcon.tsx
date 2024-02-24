import {PureComponent} from "react";
import {GuildInfo_guild_roles} from "@generated";
import {RoleIconBase, UnicodeEmojiBase} from "@ui/Messages/Message/elements";
import Tooltip from "rc-tooltip";
import webpCheck from "@ui/shared/webpCheck";
import {memoize} from "lodash";
import * as React from "react";

interface RoleIconProps {
  role: GuildInfo_guild_roles;
}

class RoleIcon extends PureComponent<RoleIconProps> {
  private getRoleIcon = memoize(
    (icon: string, roleId: string): string =>
      webpCheck(`https://cdn.discordapp.com/role-icons/${roleId}/${icon}.webp`)
  );

  render() {
    if (
      this.props.role === null || (
        this.props.role.icon === null
        && this.props.role.unicodeEmoji === null
      )
    )
      return null;

    if (this.props.role.unicodeEmoji !== null)
      return (
        <Tooltip overlay={this.props.role.name} placement="top">
          <span>
            <UnicodeEmojiBase disableTooltip={true}>
              {this.props.role.unicodeEmoji}
            </UnicodeEmojiBase>
          </span>
        </Tooltip>
      );

    const iconUrl = this.getRoleIcon(this.props.role.icon, this.props.role.id);

    return (
      <Tooltip overlay={this.props.role.name} placement="top">
        <RoleIconBase src={iconUrl} />
      </Tooltip>
    );
  }
}

export default RoleIcon;
