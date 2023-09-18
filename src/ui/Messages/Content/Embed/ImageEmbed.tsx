import useSize from "@ui/Messages/Content/Attachment/useSize";
import {MediaEmbedBase} from "@ui/Messages/Content/Embed/elements";
import ExpandableImage from "@ui/shared/ExpandableImage";
import {Message_embeds} from "@generated";
import { useContext } from "react";
import { ScrollerWidthContext } from "@views/Messages/Messages";
import { FullWidthSpacing } from "..";

export interface GifVEmbedProps {
  embed: Message_embeds;
}

function ImageEmbed({embed}: GifVEmbedProps) {
  const scrollerWidth = useContext(ScrollerWidthContext)
  const maxWidth = scrollerWidth ? scrollerWidth - FullWidthSpacing : undefined;
  const size = useSize(embed.thumbnail.width, embed.thumbnail.height, undefined, maxWidth);

  return (
    <ExpandableImage
      className={MediaEmbedBase}
      src={embed.thumbnail.proxyUrl}
      originalUrl={embed.thumbnail.url}
      width={size.width}
      height={size.height}
    />
  );
}

export default ImageEmbed;
