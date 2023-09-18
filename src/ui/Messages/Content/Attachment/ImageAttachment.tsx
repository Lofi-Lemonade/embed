import {Message_attachments} from "@generated";
import useSize from "@ui/Messages/Content/Attachment/useSize";
import ExpandableImage from "@ui/shared/ExpandableImage";
import {ImageAttachmentBase} from "@ui/Messages/Content/Attachment/elements";
import { useContext } from "react";
import { ScrollerWidthContext } from "@views/Messages/Messages";
import { FullWidthSpacing } from "..";

interface ImageAttachmentProps {
  attachment: Message_attachments;
}

function ImageAttachment(props: ImageAttachmentProps) {
  const scrollerWidth = useContext(ScrollerWidthContext)
  const maxWidth = scrollerWidth ? scrollerWidth - FullWidthSpacing : undefined;
  const { width, height } = useSize(props.attachment.width, props.attachment.height, undefined, maxWidth);

  return (
    <ExpandableImage src={props.attachment.url} width={width} height={height} className={ImageAttachmentBase} />
  )
}

export default ImageAttachment;
