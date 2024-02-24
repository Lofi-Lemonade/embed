import {
  IconsBase,
  SystemMessageBase,
  SystemMessageContentBase
} from "@ui/Messages/Message/elements";
import LargeTimestamp from "@ui/Messages/Message/LargeTimestamp";

interface GuildDiscoveryRequalifiedProps {
  createdAt: number;
}

function GuildDiscoveryRequalified(props: GuildDiscoveryRequalifiedProps) {
  return (
    <SystemMessageBase>
      <IconsBase.Checkmark />
      <SystemMessageContentBase>
        This server is eligible for Server Discovery again and has been automatically relisted!
      </SystemMessageContentBase>
      <LargeTimestamp timestamp={props.createdAt} />
    </SystemMessageBase>
  );
}

export default GuildDiscoveryRequalified;
