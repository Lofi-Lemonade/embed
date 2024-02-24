import optimize from '@ui/shared/ExpandableImage/optimize'
import { Scale } from '@ui/shared/ScaledImage'
import { useState, useEffect } from 'react'
import DiscordImageFailure from "@images/discordAssets/discord-image-failure.svg";

import {Error, Image, Root} from './elements'
import { store } from '@models'

interface Props {
  src: string
  originalUrl?: string
  className?: string

  height?: number
  width?: number
  maxWidth?: number
  maxHeight?: number
  fillMaxSize?: boolean
}

const ExpandableImage = (props: Props) => {
  const { className, src: url } = props;
  const scale = new Scale(props);
  const [loadState, setLoadState] = useState<'loaded' | 'error' | 'loading'>(
    null
  );

  useEffect(() => {
    const timer = setTimeout(() => !loadState && setLoadState('loading'), 100)

    return () => clearTimeout(timer)
  }, []);

  const imageUrl = loadState !== "error"
    ? optimize({
      width: scale.width,
      height: scale.height,
      url
    })
    : DiscordImageFailure;

  return (
    <Root
      className={className || null}
      scale={scale}
      onClick={() => store.modal.openImage(url, props.originalUrl)}
      style={props.fillMaxSize === true ? { width: '100%', height: '100%' } : null}
    >
      <a
        href={props.originalUrl ?? props.src}
        onClick={e => e.preventDefault()}
        target="_blank"
        rel="noopener"
      >
        <Image
          src={imageUrl}
          className={loadState === "error" && Error}
          style={{
            width: scale.width,
            height: scale.height
          }}
          // onLoad={() => setLoadState('loaded')}
          onError={() => setLoadState('error')}
        />
      </a>
      {/*{loadState === 'loading' && <Loading />}*/}
    </Root>
  )
}

export default ExpandableImage
