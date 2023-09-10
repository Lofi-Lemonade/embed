import {useMemo} from "react";
import {Message_embeds_image, Message_embeds_thumbnail} from "@generated";

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
      const proposedWidth = maxWidth ? Math.min(400, maxWidth) : 400;
      const proposedHeight = proposedWidth / image.width * image.height;

      const { width, height } = proposedHeight > proposedWidth && maxWidth >= 300
        ? { width: 300 / image.height * image.width, height: 300 }
        : { width: proposedWidth, height: proposedHeight };

      return {
        width,
        height,
        isLarge: true
      };
    }

    const { imageHeight, imageWidth } = image.width > image.height
      ? { imageWidth: 80, imageHeight: 80 / image.width * image.height }
      : { imageWidth: 80 * image.width / image.height, imageHeight: 80 };

    return { width: imageWidth, height: imageHeight, isLarge: false };
  }, [type, image, image, cancel, maxWidth]);

  return { width, height, isLarge };
}

export default useSize;
