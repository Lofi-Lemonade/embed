import {CSSProperties, useState} from "react";
import {Message as MessageData} from "@generated";
import {MessageGroupBase} from "@ui/Messages/elements";
import Message from "@ui/Messages/Message";

interface MessageProps {
  messages: MessageData[];
  style?: CSSProperties;
  showButtons?: boolean;
  thread: boolean;
}

function MessageGroup(props: MessageProps) {
  const [firstMessage, ...otherMessages] = props.messages;
  const [isHovered, setIsHovered] = useState(false);

  return (
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
  );
}

export default MessageGroup;
