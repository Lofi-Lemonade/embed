import {Message_reactions} from "@generated";
import {ReactionsBase} from "@ui/Messages/Message/elements";
import Reaction from "@ui/Messages/Message/Reactions/Reaction";

interface ReactionsProps {
  reactions: Message_reactions[];
}

function Reactions(props: ReactionsProps) {
  return (
    <ReactionsBase className="reactions-base">
      {props.reactions.map(reaction => (
        <Reaction key={reaction.animated + reaction.emojiId + reaction.emojiName} reaction={reaction} />
      ))}
    </ReactionsBase>
  );
}

export default Reactions;
