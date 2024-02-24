import { Message_author } from "@generated";
import webpCheck from "@ui/shared/webpCheck";
import {AuthStore} from "@store";

type User = Pick<Message_author, 'avatarUrl'> | AuthStore["user"];
type AvatarSize = 16 | 20 | 22 | 24 | 28 | 32 | 40 | 44 | 48 | 56 | 60 | 64
  | 80 | 96 | 100 | 128 | 160 | 240 | 256 | 300 | 320 | 480
  | 512 | 600 | 640 | 1024 | 1280 | 1536 | 2048 | 3072 | 4096;

function gifCheck(url: string) {
  return url.includes('/a_')
    ? url.replace('webp', 'gif')
    : url;
}

function getAvatarProperty(user: User, avatarSize: AvatarSize = 80): string | null {
  if ("avatarUrl" in user) {
    if (!user.avatarUrl) return null;

    return user.avatarUrl.includes('cdn.discordapp.com') ? `${user.avatarUrl}?size=${avatarSize}` : user.avatarUrl;
  }

  return `https://cdn.discordapp.com/avatars/${user._id}/${user.avatar}.webp?size=${avatarSize}`;
}

export interface GetAvatarOptions {
  animated?: boolean;
  size?: AvatarSize;
}

function getAvatar(user: User, { animated, size }: GetAvatarOptions = {}): string {
  // assign default values
  animated ??= true;
  size ??= 80;

  const avatarUrl = getAvatarProperty(user, size);
  const potentialGif = animated
    ? gifCheck(avatarUrl)
    : avatarUrl;

  return avatarUrl
    ? webpCheck(potentialGif)
    : 'https://cdn.discordapp.com/embed/avatars/0.png';
}

export default getAvatar;
