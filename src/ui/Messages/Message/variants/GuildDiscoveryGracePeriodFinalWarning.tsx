import {
  IconsBase, SystemMessageBase,
  SystemMessageContentBase
} from "@ui/Messages/Message/elements";
import LargeTimestamp from "@ui/Messages/Message/LargeTimestamp";

interface GuildDiscoveryGracePeriodFinalWarningProps {
  createdAt: number;
}

function GuildDiscoveryGracePeriodFinalWarning(props: GuildDiscoveryGracePeriodFinalWarningProps) {
  return (
    <SystemMessageBase>
      <IconsBase.Warning />
      <SystemMessageContentBase>
        This server has failed Discovery activity requirements for 3 weeks.
        If this server fails for 1 more week, it will be removed from Discovery.
      </SystemMessageContentBase>
      <LargeTimestamp timestamp={props.createdAt} />
    </SystemMessageBase>
  );
}

export default GuildDiscoveryGracePeriodFinalWarning;
