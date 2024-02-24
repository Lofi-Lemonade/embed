import { Root, OpenImage } from './elements'
import { Box, Close } from '@ui/Modal'
import { observer } from 'mobx-react'
import { store } from '@models'
import {useState} from "react";
import DiscordImageFailure from "@images/discordAssets/discord-image-failure.svg";

const Image = observer(() => {
  const [error, setError] = useState(false);

  return (
    <Box>
      <Close onClick={store.modal.close} />

      <Root src={error ? DiscordImageFailure : store.modal.data} onError={() => setError(true)} />
      <OpenImage
        href={store.modal.originalUrl ?? store.modal.data}
        target="_blank"
        onClick={store.modal.close}
      >
        Open original
      </OpenImage>
    </Box>
  )
})

export default Image
