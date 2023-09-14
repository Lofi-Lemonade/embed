import useSize from "@ui/Messages/Content/Attachment/useSize";
import {MediaEmbedBase} from "@ui/Messages/Content/Embed/elements";
import {Message_embeds} from "@generated";
import { useContext } from "react";
import { ScrollerWidthContext } from "@views/Messages/Messages";
import { FullWidthSpacing } from "..";

export interface GifVEmbedProps {
  embed: Message_embeds;
}

function GifVEmbed({embed}: GifVEmbedProps) {
  const scrollerWidth = useContext(ScrollerWidthContext)
  const size = useSize(embed.thumbnail.width, embed.thumbnail.height, undefined, scrollerWidth ? scrollerWidth - FullWidthSpacing : undefined);

  return (
    <video
      className={MediaEmbedBase}
      src={embed.video.proxyUrl ?? embed.video.url}
      width={size.width}
      height={size.height}
      autoPlay
      muted
      loop
      playsInline
    />
  );
}

export default GifVEmbed;
