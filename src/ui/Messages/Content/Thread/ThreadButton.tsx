import {
  SeeThreadButtonBase,
  ThreadButtonBase,
  ThreadButtonContainerBase, ThreadButtonNameBase, ThreadButtonTopLineBase
} from "@ui/Messages/Content/elements";
import {Message_thread} from "@generated";
import {useCallback} from "react";
import {generalStore} from "@store";
import {ThreadSpineBase} from "@ui/Messages/Message/elements";
import {MessageType} from "@generated/globalTypes";

interface ThreadButtonProps {
  messageType: MessageType;
  hasReply: boolean;
  thread: Message_thread;
}

function ThreadButton(props: ThreadButtonProps) {
  const openThread = useCallback(() => generalStore.setActiveThread(props.thread),
    [props.thread.id, props.thread.name, props.thread.locked]);

  return (
    <ThreadButtonContainerBase>
      <ThreadSpineBase messageType={props.messageType} hasReply={props.hasReply} />
      <ThreadButtonBase>
        <ThreadButtonTopLineBase>
          <ThreadButtonNameBase>{props.thread.name}</ThreadButtonNameBase>
          <SeeThreadButtonBase onClick={openThread}>
            See Thread ›
          </SeeThreadButtonBase>
        </ThreadButtonTopLineBase>
      </ThreadButtonBase>
    </ThreadButtonContainerBase>
  );
}

export default ThreadButton;
