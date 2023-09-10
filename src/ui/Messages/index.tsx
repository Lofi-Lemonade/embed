import {CSSProperties, createContext, useState} from "react";
import {Message as MessageData} from "@generated";
import {MessageGroupBase} from "@ui/Messages/elements";
import Message from "@ui/Messages/Message";

interface MessageProps {
  messages: MessageData[];
  style?: CSSProperties;
  showButtons?: boolean;
  thread: boolean;
  scrollerWidth?: number;
}

export const ScrollerWidthContext = createContext(null)

function MessageGroup(props: MessageProps) {
  const [firstMessage, ...otherMessages] = props.messages;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ScrollerWidthContext.Provider value={props.scrollerWidth}>
      <MessageGroupBase
        style={props.style}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Message isFirstMessage message={firstMessage} isHovered={isHovered} showButtons={props.showButtons ?? true} thread={props.thread} />
        {otherMessages.map(message => (
          <Message key={message.id} message={message} showButtons={props.showButtons ?? true} thread={props.thread} />
        ))}
      </MessageGroupBase>
    </ScrollerWidthContext.Provider>
  );
}

export default MessageGroup;
