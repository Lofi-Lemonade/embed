/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType, FormatType, MentionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: ForumPosts
// ====================================================

export interface ForumPosts_channel_AnnouncementChannel_threads_AnnouncementChannel {
  __typename: "AnnouncementChannel" | "ForumChannel" | "TextChannel" | "VoiceChannel";
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_author {
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

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_embeds_author | null;
  fields: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_embeds_fields[] | null;
  image: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_embeds_image | null;
  provider: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_embeds_provider | null;
  footer: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_embeds_footer | null;
  thumbnail: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_embeds_thumbnail | null;
  video: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_embeds_video | null;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_interaction_user;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_author;
  attachments: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_attachments[];
  stickers: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_stickers[];
  reactions: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_reactions[] | null;
  messageReference: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_messageReference | null;
  embeds: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_embeds[];
  mentions: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_mentions[];
  interaction: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_interaction | null;
  thread: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages_thread | null;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage {
  __typename: "MessageBunch";
  messages: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage_messages[];
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_messageBunch_messages {
  __typename: "Message";
  id: string;
  createdAt: any;
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_messageBunch {
  __typename: "MessageBunch";
  messages: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_messageBunch_messages[];
}

export interface ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel {
  __typename: "ThreadChannel";
  id: string;
  name: string;
  locked: boolean;
  messageCount: number;
  appliedTags: string[];
  firstMessage: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_firstMessage;
  messageBunch: ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel_messageBunch;
}

export type ForumPosts_channel_AnnouncementChannel_threads = ForumPosts_channel_AnnouncementChannel_threads_AnnouncementChannel | ForumPosts_channel_AnnouncementChannel_threads_ThreadChannel;

export interface ForumPosts_channel_AnnouncementChannel {
  __typename: "AnnouncementChannel" | "TextChannel" | "ThreadChannel" | "VoiceChannel";
  id: string;
  threads: ForumPosts_channel_AnnouncementChannel_threads[] | null;
}

export interface ForumPosts_channel_ForumChannel_threads_AnnouncementChannel {
  __typename: "AnnouncementChannel" | "ForumChannel" | "TextChannel" | "VoiceChannel";
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_author {
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

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_embeds_author | null;
  fields: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_embeds_fields[] | null;
  image: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_embeds_image | null;
  provider: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_embeds_provider | null;
  footer: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_embeds_footer | null;
  thumbnail: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_embeds_thumbnail | null;
  video: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_embeds_video | null;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_interaction_user;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_author;
  attachments: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_attachments[];
  stickers: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_stickers[];
  reactions: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_reactions[] | null;
  messageReference: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_messageReference | null;
  embeds: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_embeds[];
  mentions: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_mentions[];
  interaction: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_interaction | null;
  thread: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages_thread | null;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage {
  __typename: "MessageBunch";
  messages: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage_messages[];
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_messageBunch_messages {
  __typename: "Message";
  id: string;
  createdAt: any;
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel_messageBunch {
  __typename: "MessageBunch";
  messages: ForumPosts_channel_ForumChannel_threads_ThreadChannel_messageBunch_messages[];
}

export interface ForumPosts_channel_ForumChannel_threads_ThreadChannel {
  __typename: "ThreadChannel";
  id: string;
  name: string;
  locked: boolean;
  messageCount: number;
  appliedTags: string[];
  firstMessage: ForumPosts_channel_ForumChannel_threads_ThreadChannel_firstMessage;
  messageBunch: ForumPosts_channel_ForumChannel_threads_ThreadChannel_messageBunch;
}

export type ForumPosts_channel_ForumChannel_threads = ForumPosts_channel_ForumChannel_threads_AnnouncementChannel | ForumPosts_channel_ForumChannel_threads_ThreadChannel;

export interface ForumPosts_channel_ForumChannel {
  __typename: "ForumChannel";
  id: string;
  threads: ForumPosts_channel_ForumChannel_threads[] | null;
  defaultSortOrder: number | null;
}

export type ForumPosts_channel = ForumPosts_channel_AnnouncementChannel | ForumPosts_channel_ForumChannel;

export interface ForumPosts {
  channel: ForumPosts_channel;
}

export interface ForumPostsVariables {
  guild: string;
  channel: string;
}
