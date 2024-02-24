/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChannelType
// ====================================================

export interface ChannelType_channel {
  __typename: "AnnouncementChannel" | "ForumChannel" | "TextChannel" | "ThreadChannel" | "VoiceChannel";
  id: string;
}

export interface ChannelType {
  channel: ChannelType_channel;
}

export interface ChannelTypeVariables {
  guild: string;
  channel: string;
}
