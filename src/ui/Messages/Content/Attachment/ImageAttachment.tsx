import {Message_attachments} from "@generated";
import useSize from "@ui/Messages/Content/Attachment/useSize";
import ExpandableImage from "@ui/shared/ExpandableImage";

interface ImageAttachmentProps {
  attachment: Message_attachments;
}

function ImageAttachment(props: ImageAttachmentProps) {
  const { width, height } = useSize(props.attachment.width, props.attachment.height);

  return (
    <ExpandableImage src={props.attachment.url} width={width} height={height} />
  )
}

export default ImageAttachment;
