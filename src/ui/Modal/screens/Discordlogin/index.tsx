// We can't directly open a Discord login popup via embed-api due to the popup blocker
// so instead, we open a modal with a login button

import { store } from '@models'
import { Root } from './elements'
import Button from '@ui/shared/button'
import { authStore, generalStore } from '@store'

function discordLogin() {
  let ls: Storage
  try {
    ls = localStorage
  } catch (e) {
    generalStore.toggleMenu(true)
  }

  if (ls) authStore.discordLogin().then(async () => {
    await authStore.fetchDiscordUser();
    generalStore.needsUpdate = true;
    store.modal.close()
  });
}

const Link = () => {
  return <Root className="discord-login-modal">
    <Button variant="large" onClick={discordLogin}>Click to login with Discord</Button>
  </Root>
}

export default Link
