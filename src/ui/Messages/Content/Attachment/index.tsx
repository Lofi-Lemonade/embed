import {Message_attachments} from "@generated";
import VideoAttachment from "@ui/Messages/Content/Attachment/VideoAttachment";
import {memo, useState} from "react";
import {SpoilerBase} from "@ui/Messages/Content/Attachment/elements";
import {
  Attachment as AttachmentNamespace,
} from "@ui/Messages/Content/Attachment/elements";
import ImageAttachment from "@ui/Messages/Content/Attachment/ImageAttachment";
import GenericAttachment
  from "@ui/Messages/Content/Attachment/GenericAttachment";

// attachment icons
import audio from '@images/discordAssets/7674eb0d869afebca7b1f3a5202506c6.svg'
import acrobat from '@images/discordAssets/aee87e981ef9acae845ef397c7a034c5.svg'
import ae from '@images/discordAssets/f8e80ba7587764ddfa27aa1e02c6ed54.svg'
import sketch from '@images/discordAssets/318ce2f97a8bd1d7a693938d9aff5f08.svg'
import ai from '@images/discordAssets/f1141359084b3b61f3a41adbe541fdbb.svg'
import archive from '@images/discordAssets/4f27cbf7f975daa32fe7c8dec19ce2de.svg'
import code from '@images/discordAssets/d6bb78c1d64640ad06cc8cdd1c61b67d.svg'
import document from '@images/discordAssets/3c2ce4428c2c44824b07162f648524f5.svg'
import spreadsheet from '@images/discordAssets/1939fe07993a754364bf3fee5223428d.svg'
import webcode from '@images/discordAssets/557b6b6b982a8c2b2c97048b86e2e6c3.svg'
import unknown from '@images/discordAssets/66084381f55f4238d69e5cbe3b8dc42e.svg'

export interface AttachmentProps {
  attachment: Message_attachments;
}

function AttachmentBase(props: AttachmentProps) {
  if (props.attachment.width && props.attachment.height) {
    if (/\.(?:mp4|webm|mov)$/.test(props.attachment.filename))
      return <VideoAttachment attachmentOrEmbed={props.attachment} />;

    return <ImageAttachment attachment={props.attachment} />;
  }

  // TODO: try to avoid the same component being reused with just a different icon

  if (/\.(?:mp3|ogg|wav|flac)$/.test(props.attachment.filename))
    return (
      <GenericAttachment attachment={props.attachment} icon={audio}>
        <AttachmentNamespace.AudioBase controls src={props.attachment.url} />
      </GenericAttachment>
    );

  if (/\.sketch$/.test(props.attachment.filename))
    return <GenericAttachment attachment={props.attachment} icon={sketch} />;

  if (/\.pdf$/.test(props.attachment.filename))
    return <GenericAttachment attachment={props.attachment} icon={acrobat} />;

  if (/\.ae$/.test(props.attachment.filename))
    return <GenericAttachment attachment={props.attachment} icon={ae} />;

  if (/\.ai$/.test(props.attachment.filename))
    return <GenericAttachment attachment={props.attachment} icon={ai} />;

  if (/\.(?:rar|zip|7z|tar|tar\.gz)$/.test(props.attachment.filename))
    return <GenericAttachment attachment={props.attachment} icon={archive} />;

  if (/\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/.test(props.attachment.filename))
    return <GenericAttachment attachment={props.attachment} icon={code} />;

  if (/\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/.test(props.attachment.filename))
    return <GenericAttachment attachment={props.attachment} icon={document} />;

  if (/\.(?:xls|xlsx|numbers|csv)$/.test(props.attachment.filename))
    return <GenericAttachment attachment={props.attachment} icon={spreadsheet} />;

  if (/\.(?:html|xhtml|htm|js|xml|xls|xsd|css|styl)$/.test(props.attachment.filename))
    return <GenericAttachment attachment={props.attachment} icon={webcode} />;

  return <GenericAttachment attachment={props.attachment} icon={unknown} />;
}

function AttachmentContainer(props: AttachmentProps) {
  const [showSpoiler, setShowSpoiler] = useState(false);

  if (props.attachment.filename.startsWith('SPOILER_'))
    return (
      <SpoilerBase
        data-show={showSpoiler}
        onClick={() => setShowSpoiler(true)}
      >
        <AttachmentBase attachment={props.attachment} />
      </SpoilerBase>
    );

  return (
    <AttachmentBase attachment={props.attachment} />
  );
}

function Attachment(props: AttachmentProps) {
  return <AttachmentContainer attachment={props.attachment} />;
}

export default memo(Attachment);
