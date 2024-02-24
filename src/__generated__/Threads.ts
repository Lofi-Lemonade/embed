/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType, FormatType, MentionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: Threads
// ====================================================

export interface Threads_channel_threads_AnnouncementChannel {
  __typename: "AnnouncementChannel" | "ForumChannel" | "TextChannel" | "VoiceChannel";
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages_author {
  __typename: "User";
  avatarUrl: string;
  bot: boolean;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
  roles: string[] | null;
  system: boolean;
  isWebhook: boolean;
  color: number;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: Threads_channel_threads_ThreadChannel_messageBunch_messages_embeds_author | null;
  fields: Threads_channel_threads_ThreadChannel_messageBunch_messages_embeds_fields[] | null;
  image: Threads_channel_threads_ThreadChannel_messageBunch_messages_embeds_image | null;
  provider: Threads_channel_threads_ThreadChannel_messageBunch_messages_embeds_provider | null;
  footer: Threads_channel_threads_ThreadChannel_messageBunch_messages_embeds_footer | null;
  thumbnail: Threads_channel_threads_ThreadChannel_messageBunch_messages_embeds_thumbnail | null;
  video: Threads_channel_threads_ThreadChannel_messageBunch_messages_embeds_video | null;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: Threads_channel_threads_ThreadChannel_messageBunch_messages_interaction_user;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch_messages {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: Threads_channel_threads_ThreadChannel_messageBunch_messages_author;
  attachments: Threads_channel_threads_ThreadChannel_messageBunch_messages_attachments[];
  stickers: Threads_channel_threads_ThreadChannel_messageBunch_messages_stickers[];
  reactions: Threads_channel_threads_ThreadChannel_messageBunch_messages_reactions[] | null;
  messageReference: Threads_channel_threads_ThreadChannel_messageBunch_messages_messageReference | null;
  embeds: Threads_channel_threads_ThreadChannel_messageBunch_messages_embeds[];
  mentions: Threads_channel_threads_ThreadChannel_messageBunch_messages_mentions[];
  interaction: Threads_channel_threads_ThreadChannel_messageBunch_messages_interaction | null;
  thread: Threads_channel_threads_ThreadChannel_messageBunch_messages_thread | null;
}

export interface Threads_channel_threads_ThreadChannel_messageBunch {
  __typename: "MessageBunch";
  messages: Threads_channel_threads_ThreadChannel_messageBunch_messages[];
}

export interface Threads_channel_threads_ThreadChannel {
  __typename: "ThreadChannel";
  id: string;
  name: string;
  locked: boolean;
  messageBunch: Threads_channel_threads_ThreadChannel_messageBunch;
}

export type Threads_channel_threads = Threads_channel_threads_AnnouncementChannel | Threads_channel_threads_ThreadChannel;

export interface Threads_channel {
  __typename: "AnnouncementChannel" | "ForumChannel" | "TextChannel" | "ThreadChannel" | "VoiceChannel";
  id: string;
  threads: Threads_channel_threads[] | null;
}

export interface Threads {
  channel: Threads_channel;
}

export interface ThreadsVariables {
  guild: string;
  channel: string;
}
