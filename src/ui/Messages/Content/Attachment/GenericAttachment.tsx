import {
  Attachment,
} from "@ui/Messages/Content/Attachment/elements";
import {AttachmentProps} from "@ui/Messages/Content/Attachment/index";

import unknown from '@images/discordAssets/66084381f55f4238d69e5cbe3b8dc42e.svg'
import downloadIcon from '@images/discordAssets/download-icon.svg'
import fileSize from "filesize";
import {ReactNode} from "react";

interface GenericAttachmentProps extends AttachmentProps {
  // If undefined, we will fall back to the unknown icon
  icon?: string;
  children?: ReactNode;
}

function GenericAttachment(props: GenericAttachmentProps) {
  return (
    <Attachment.ContainerBase
      icon={props.icon ?? unknown}
      hasChildren={props.children !== undefined}
    >
      <Attachment.MetaBase>
        <Attachment.FileNameBase rel="noreferrer noopener" target="_blank" href={props.attachment.url}>
          {props.attachment.filename}
        </Attachment.FileNameBase>
        <Attachment.FileSizeBase>
          {fileSize(props.attachment.size, {base: 2})}
        </Attachment.FileSizeBase>
      </Attachment.MetaBase>
      <Attachment.DownloadIconBase rel="noreferrer noopener" target="_blank" href={props.attachment.url}>
        <img src={downloadIcon} alt="download" />
      </Attachment.DownloadIconBase>
      {props.children && (
        <Attachment.ExtraUserInterfaceBase>
          {props.children}
        </Attachment.ExtraUserInterfaceBase>
      )}
    </Attachment.ContainerBase>
  )
}

export default GenericAttachment;
