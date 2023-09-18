import {useMemo} from "react";
import {Message_embeds_image, Message_embeds_thumbnail} from "@generated";

const MaxImageWidth = 400;
const MaxImageHeight = 300;
const MaxThumbnailSize = 80;

function useSize(
  type: string,
  image: Message_embeds_image | Message_embeds_thumbnail,
  cancel?: boolean,
  maxWidth?: number
) {
  const { width, height, isLarge } = useMemo(() => {
    if (cancel)
      return { width: null, height: null, isLarge: false };

    if (image === null)
      return { width: null, height: null, isLarge: false };

    if (image.__typename === "EmbedImage" || /^article|image$/i.test(type)) {
      const proposedWidth = maxWidth ? Math.min(MaxImageWidth, maxWidth) : MaxImageWidth;
      const proposedHeight = proposedWidth / image.width * image.height;

      const { width, height } = proposedHeight > proposedWidth && maxWidth >= MaxImageHeight
        ? { width: MaxImageHeight / image.height * image.width, height: MaxImageHeight }
        : { width: proposedWidth, height: proposedHeight };

      return {
        width,
        height,
        isLarge: true
      };
    }

    const { imageHeight, imageWidth } = image.width > image.height
      ? { imageWidth: MaxThumbnailSize, imageHeight: MaxThumbnailSize / image.width * image.height }
      : { imageWidth: MaxThumbnailSize * image.width / image.height, imageHeight: MaxThumbnailSize };

    return { width: imageWidth, height: imageHeight, isLarge: false };
  }, [type, image, image, cancel, maxWidth]);

  return { width, height, isLarge };
}

export default useSize;
