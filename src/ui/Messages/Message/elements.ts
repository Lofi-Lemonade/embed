import styled from '../ThemeContext'
import {Twemoji} from "@ui/shared/Emoji/emoji";
import {css} from "react-emotion";
import {memo} from "react";
import add from "@images/discordAssets/e06a573355c490f7ce6e3125ac01db81.svg";
import remove from "@images/discordAssets/f772d3d7eddcf3c84f710c10999479f0.svg";
import warning from "@images/discordAssets/warning.svg";
import cross from "@images/discordAssets/c7078943fc392e7dede27a20e6cfdcfb.svg";
import pin from "@images/discordAssets/5da4cdab01d4d89c593c48c62ae0d937.svg";
import checkmark from "@images/discordAssets/86b5987e685f72352730d56690393fc8.svg";
import threadNameChanged from "@images/discordAssets/1688a01d0e6f27bead9ae6ca9e51dd32.svg";
import threadCreated from "@images/discordAssets/thread-created.svg";
import boost from "@images/discordAssets/boost.svg";
import {MessageType} from "@generated/globalTypes";
import {ThreadButtonHeight} from "@ui/Messages/Content/elements";

/*
==============================================================

  Message

==============================================================
 */

export namespace MessageContainerStyle {
  export const Base = styled.div`
    position: relative;
    margin-right: 14px;
    
    &:hover {
      --background-color: ${({theme}) => theme.colors._background.darken(0.07).string()};
      
      .buttons {
        display: flex;
      }
    }
  `;

  export const Buttons = styled.div`
    position: absolute;
    right: 14px;
    top: 0;
    transform: translateY(-50%);
    display: none;
    flex-direction: row;
    box-shadow: 0 0 0 1px rgba(4, 4, 5, 0.15);
    background-color: ${props => props.theme.colors.background};
    z-index: 1;
    border-radius: 4px;
    overflow: hidden;
    transition: box-shadow 0.1s ease-in-out;
    user-select: none;
    
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 0 1px rgba(4, 4, 5, 0.15), 0 4px 4px rgba(0, 0, 0, 0.16);
    }
  `;

  export const Button = styled.button`
    border: none;
    border-radius: 0;
    display: flex;
    padding: 6px;
    opacity: 0.7;
    
    &:hover {
      background-color: ${props => props.theme.colors._primary.fade(0.9).string()};
      opacity: 1;
    }
  `;
}

interface MessageBaseProps {
  isUserMentioned?: boolean;
}
export const MessageBase = styled.div<MessageBaseProps>`
  position: relative;
  padding: 2px 48px 2px 72px;

  &:hover  .short-time {
    display: inherit;
  }
  
  ${({isUserMentioned}) => isUserMentioned && css`
    --background-color: rgba(250, 168, 26, 0.1);
    
    &:hover {
      --background-color: rgba(250, 168, 26, 0.08);
    }

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 2px;
      height: 100%;
      background-color: #faa81a;
    }
  `}

  & .short-time {
    display: none;
  }

  a {
    color: #00b0f4;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  background-color: var(--background-color);
`;

export const DeferredMessage = styled.div`
  font-size: 14px;
`;

export const FailedInteraction = styled(DeferredMessage)`
  display: flex;
  padding-top: 4px;
  align-items: center;
  gap: 8px;
  color: #ED4245;
`;

const typingIndicatorDuration = "1.2s";

export const TypingIndicator = styled.svg`
  @keyframes typing {
    0% {
      transform: scale(0.9);
      opacity: 0.3;
    }
    25% {
      transform: scale(1);
      opacity: 1;
    }
    50%,
    100% {
      transform: scale(0.9);
      opacity: 0.3;
    }
  }
  
  color: ${({theme}) => theme.colors._primary.string()};
  
  .typing-1,
  .typing-2,
  .typing-3 {
    animation: typing ${typingIndicatorDuration} infinite;
  }

  .typing-1 {
    transform-origin: 3.5px center;
    animation-delay: .1s;
  }
  .typing-2 {
    transform-origin: 12.25px center;
    animation-delay: .2s;
  }
  .typing-3 {
    transform-origin: 21px center;
    animation-delay: .3s;
  }
;`

export const SystemMessageBase = styled(MessageBase)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const SystemMessageContentBase = styled.span<{fullPrimary?: boolean}>`
  ${({fullPrimary, theme}) => fullPrimary
    ? css`
      color: ${theme.colors._primary.string()};
    `
    : css`
      &,
      & strong {
        color: ${theme.colors._primary.darken(0.4).string()};
    }`
  }
`;

interface SystemMessageLinkBaseProps {
  cursor?: string;
}
export const SystemMessageLinkBase = memo(styled.span<SystemMessageLinkBaseProps>`
  color: ${({theme}) => theme.colors._primary.string()};
  
  &:hover {
    cursor: ${({cursor}) => cursor !== undefined ? cursor : 'pointer'};
    text-decoration: underline;
  }
`);

interface ThreadSpineBaseProps {
  messageType: MessageType;
  hasReply: boolean;
}

export const ThreadSpineBase = memo(styled.div<ThreadSpineBaseProps>`
  position: absolute;
  left: calc(72px / 2);
  border-left: 2px solid #4f545c;
  border-bottom: 2px solid #4f545c;
  border-bottom-left-radius: 6px;
  width: calc(72px / 2 - 4px);
  
  ${({messageType, hasReply}) => messageType === MessageType.ThreadCreated 
  ? css`
    top: ${6 /* thread icon padding */ + 16 /* icon height */ + 4 /* some extra padding */}px;
    bottom: ${ThreadButtonHeight / 2}px;
  `
  : css`
    ${hasReply
      ? css`
        // check ReplySpineBase for specifics on the 12 and 9 values
        top: ${48 + 12 + 9 + 4}px;
      `
      : css`
        top: 48px;
      `
    }
    bottom: ${(ThreadButtonHeight + 6 + 4 /* the padding from the thread button */) / 2}px;
  `}
`);

export const ReplySpineBase = memo(styled.div`
  position: absolute;
  width: 33px;
  height: 12px;
  top: 9px;
  left: 34px;
  border-left: 2px solid #4f545c;
  border-top: 2px solid #4f545c;
  border-top-left-radius: 6px;
`);

export const EditedBase = styled.span`
  font-size: 10px;
  margin-left: 4px;
  white-space: nowrap;
  
  color: ${({theme}) => theme.colors._primary.darken(0.5).string()};
`;

interface ContentBaseProps {
  isReplyContent?: boolean;
}

export const ContentBase = styled.span`
  color: ${({theme}) => theme.colors._primary.fade(1 - 0.827).string()};
  
  ${
    ({isReplyContent}: ContentBaseProps) => isReplyContent
        ? css`
              font-size: 14px;
              opacity: 0.64;
              cursor: pointer;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              display: flex;
              max-width: calc(100% - 72px);
              align-items: center;
              
              .heading {
                display: inline;
                font-size: 100%;
              }

              &:hover {
                opacity: 1;
              }
        `
        : css`
              white-space: break-spaces;
              font-size: 16px;
        `
  }
`;

export namespace SlashCommandBase {
  export const Base = styled.span`
    color: ${({theme}) => theme.colors._primary.fade(1 - 0.64).string()};
    font-size: 14px;
    user-select: none;
  `;

  export const Command = styled.span`
    color: #00AFF4;
  `;
}

export const ReplyInfoBase = styled('div')`
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
`

export const ReplyUserBase = styled.span`
  display: flex;
  align-items: center;
`;

export const MiniUserAvatarBase = styled('img')`
  border-radius: 100%;
  width: 16px;
  height: 16px;
`;

export const UnknownReplyIcon = styled.div`
  background-color: #202225;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  margin-right: .25rem;
`

export const UnknownReplyText = styled(SlashCommandBase.Base)`
  font-style: italic;
`

interface MiniUserNameBaseProps {
  color: string;
}
export const MiniUserNameBase = styled.span<MiniUserNameBaseProps>`
  margin-right: 4px;
  margin-left: 4px;
  font-size: 14px;
  opacity: 0.64;
  font-weight: 500;
  white-space: nowrap;

  overflow: hidden;
  max-width: 25vw;
  text-overflow: ellipsis;

  color: ${({color}) => color};
`;

export const MessageHeaderBase = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SmallTimestampBase = styled('time')`
  position: absolute;
  left: 0;
  width: 56px;
  text-align: right;
  font-size: 0.6875rem;
  margin-top: 4px;
  user-select: none;

  color: ${({theme}) => theme.colors._primary.fade(0.5).string()};
`;

export const LargeTimestampBase = styled('time')`
  font-size: 0.75rem;
  margin-left: 8px;
  cursor: default;
  height: fit-content;
  white-space: nowrap;
  
  color: ${({theme}) => theme.colors._primary.fade(0.5).string()};
`;

export namespace IconsBase {
  interface IconBaseProps {
    centerVertically?: boolean;
  }

  const IconBase = styled.div<IconBaseProps>`
    position: absolute;
    left: 0;
    // We're using centerVertically !== false because if centerVertically is undefined, it'll be true.
    top: ${({centerVertically}) => centerVertically !== false ? '50%' : '0'};
    transform: ${({centerVertically}) => centerVertically !== false ? 'translateY(-50%)' : 'translateY(0)'};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 16px;
    width: 72px;
    height: 16px;
  `

  export const Add = memo(styled(IconBase)`
    background-image: url("${add}");
  `);

  export const Remove = memo(styled(IconBase)`
    background-image: url("${remove}");
  `);

  export const Warning = memo(styled(IconBase)`
    background-image: url("${warning}");
  `);

  export const Pinned = memo(styled(IconBase)`
    background-image: url("${pin}");
  `);

  export const Cross = memo(styled(IconBase)`
    background-image: url("${cross}");
  `);

  export const ThreadCreated = memo(styled(IconBase)`
    margin-top: 6px;
    background-image: url("${threadCreated}");
  `);

  export const Boost = memo(styled(IconBase)`
    background-image: url("${boost}");
  `);

  export const Checkmark = memo(styled(IconBase)`
    background-image: url("${checkmark}");
  `);

  export const ThreadNameChanged = memo(styled(IconBase)`
    background-image: url("${threadNameChanged}");
  `);
}

/*
==============================================================

  Message Accessories

==============================================================
 */

export const MessageAccessoriesBase = styled.div`
  display: grid;
  padding-top: 4px;
  padding-bottom: 4px;
  grid-auto-flow: row;
  grid-row-gap: 4px;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
`;

export const ReactionsBase = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  user-select: none;
`;

export const ReactionBase = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 6px;
  border-radius: 8px;
  cursor: not-allowed;
  
  background-color: ${({theme}) => theme.colors._background.darken(0.2).string()};
`;

export const EmojiTooltipBase = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ReactionEmojiBase = styled(Twemoji)`
  width: 16px;
  height: 16px;
`;

export const ReactionCountBase = styled.span`
  margin-left: 6px;
  min-width: 9px;
  font-weight: 500;
  font-size: 14px;
  
  color: ${({theme}) => theme.colors._primary.fade(0.3).string()};
`;



/*
==============================================================

  Message Author

==============================================================
 */

export const AuthorBase = styled.span`
  display: inline-flex;
`;

interface UsernameBaseProps {
  color: string | undefined;
}
export const UsernameBase = memo(styled.span<UsernameBaseProps>`
  color: ${props => props.color ?? props.theme.colors.primary};
  font-weight: 500;
  font-size: 16px;
  display: inline;
  vertical-align: baseline;
  white-space: nowrap;
`);

export const AvatarBase = styled.img`
  position: absolute;
  left: 16px;
  margin-top: 1px;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  z-index: 1;
`;



/*
==============================================================

  Role Icon

==============================================================
 */

export const RoleIconBase = styled.img`
  margin-left: .25rem;
  width: 20px;
  height: 20px;
`

export const UnicodeEmojiBase = styled(Twemoji)`
  margin-left: .25rem;
  width: 20px;
  height: 20px;
`
