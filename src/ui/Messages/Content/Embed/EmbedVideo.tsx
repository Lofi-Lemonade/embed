import {Embed_thumbnail, Embed_video} from "@generated";
import {VideoIframe, VideoThumbnail} from "@ui/Messages/Content/Embed/elements";
import VideoAttachment from "@ui/Messages/Content/Attachment/VideoAttachment";
import {ReactNode, useContext, useState} from "react";
import useSize from "@ui/Messages/Content/Attachment/useSize";
import DiscordImageFailure from "@images/discordAssets/discord-image-failure.svg";
import { ScrollerWidthContext } from "@ui/Messages";
import { EmbedMediaSpacing } from "..";

interface ThumbnailWrapperProps {
  thumbnail?: Embed_thumbnail["url"];
  children: ReactNode;
  width: number;
  height: number;
}

function ThumbnailWrapper({ thumbnail, width, height, children }: ThumbnailWrapperProps ) {
  const [hideThumbnail, setHideThumbnail] = useState(false);
  const [error, setError] = useState(false);

  if (!thumbnail || hideThumbnail)
    return <>{children}</>;

  return (
    <VideoThumbnail
      onClick={() => setHideThumbnail(true)}
      src={error ? DiscordImageFailure : thumbnail}
      onError={() => setError(true)}
      style={{ width, height }}
    />
  );
}

interface EmbedVideoProps extends Pick<Embed_video, "width" | "height"> {
  thumbnail?: Embed_thumbnail["url"];
  url: Embed_video["url"] | null;
  proxyUrl: Embed_video["proxyUrl"] | null;
}

function EmbedVideo(props: EmbedVideoProps) {
  const scrollerWidth = useContext(ScrollerWidthContext)
  const { width, height } = useSize(props.width, props.height, undefined, scrollerWidth ? scrollerWidth - EmbedMediaSpacing : undefined);

  if (props.proxyUrl !== null)
    return (
      <ThumbnailWrapper thumbnail={props.thumbnail} width={width} height={height}>
        <VideoAttachment
          attachmentOrEmbed={{
            width,
            height,
            url: props.proxyUrl,
          }}
        />
      </ThumbnailWrapper>
    );

  const url = new URL(props.url);
  url.searchParams.set("autoplay", "1");
  url.searchParams.set("auto_play", "1");

  return (
    <ThumbnailWrapper thumbnail={props.thumbnail} width={width} height={height}>
      <VideoIframe
        width={width}
        height={height}
        src={url.toString()}
        allowFullScreen={true}
      />
    </ThumbnailWrapper>
  );
}

export default EmbedVideo;
