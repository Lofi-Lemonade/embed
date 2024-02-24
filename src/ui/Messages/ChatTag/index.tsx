import Tooltip from "rc-tooltip";
import {Locale} from "@lib/Locale";
import {Tag, VerifiedBot} from "./elements";
import { Message_author } from "@generated";

const verified =
  <Tooltip placement="top" overlay="Verified Bot">
    <VerifiedBot aria-label="Verified Bot" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2">
      <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor" />
    </VerifiedBot>
  </Tooltip>

interface TagProps {
  author: Message_author
  crosspost: boolean
  referenceGuild: string
  guest: boolean
}

const ChatTag = ({ author, crosspost, referenceGuild, guest }: TagProps) => {
  if (!author.bot) return null

  if (guest)
    return <Tag className="guest">Guest</Tag>

  if (author.system || referenceGuild === '667560445975986187')
    return <Tag className="verified system">{verified} {Locale.translate('tag.system')}</Tag>

  if (crosspost)
    return <Tag className="server">{Locale.translate('tag.server')}</Tag>

  if (author.flags & 1 << 16)
    return <Tag className="verified bot">{verified} {Locale.translate('tag.bot')}</Tag>

  return <Tag className="bot">{Locale.translate('tag.bot')}</Tag>
}

export default ChatTag;
