import Tooltip from 'rc-tooltip'
import CHANNEL from './Channel.graphql'
import { Name, NewsName, NSFWName, NSFWNewsName, Emoji, Topic, Join, Stretch, SingleChannelAuthWrapper, RulesName } from '@ui/Header'

import { Root } from './elements'
import { Locale } from "@lib/Locale"
import { store } from '@models'
import { useQuery } from 'react-apollo-hooks'
import GET_INFO from "@ui/Sidebar/Header/GuildInfo.graphql";
import {authStore, AuthStore} from "@store/auth";
import {Auth} from "@ui/Sidebar/Panel/elements";
import {observer} from "mobx-react";
import { SingleChannelAuth } from '@ui/Sidebar/Panel'
import {generalStore} from "@store";

export interface HeaderProps {
  channel: string,
  guild: string,
  AuthStore?: AuthStore
}

export const Header = observer(({ channel, guild }: HeaderProps) => {
    let cData;
    try {
        cData = generalStore.guild.channels.find(c => c.id === channel) || {};
    } catch (_) {
        cData = {}
    }

    const invite = generalStore.settings?.invite;

    return (
        <Root>
            <Stretch>
                { cData.nsfw && cData.__typename === 'NewsChannel' ?
                    <NSFWNewsName><Emoji>{cData?.name}</Emoji></NSFWNewsName>
                : cData.__typename === 'NewsChannel' ?
                    <NewsName><Emoji>{cData?.name}</Emoji></NewsName>
                : cData.id === generalStore.guild?.rulesChannelId ?
                    <RulesName><Emoji>{cData?.name}</Emoji></RulesName>
                : cData.nsfw ?
                    <NSFWName><Emoji>{cData?.name}</Emoji></NSFWName>
                :
                    <Name><Emoji>{cData?.name}</Emoji></Name>}
                {window.innerWidth < 520 ? null : (
                        <Topic
                            onClick={() => store.modal.openTopic(cData?.topic, cData.name)}
                            className="topic"
                        >
                            {cData?.topic}
                        </Topic>
                    )}
            </Stretch>
            <SingleChannelAuthWrapper>
                <SingleChannelAuth />
            </SingleChannelAuthWrapper>
            {invite ? <Tooltip placement="bottom" overlay={Locale.translate('frontend.opendiscord.tooltip')}>
                    <Join
                        className="join"
                        href={invite}
                        target="_blank"
                        // TODO: Fix join button
                        // onClick={this.join}
                    >
                        {Locale.translate('frontend.opendiscord')}
                    </Join>
                </Tooltip> : null}
        </Root>
    )
});

export function onClick()  {
    generalStore.settings?.guestMode
        ? (authStore.user ? logout() : generalStore.toggleMenu(true))
        : (authStore.user ? logout() : login())
}

export function login() {
    authStore.discordLogin().then(async () => {
        await authStore.fetchDiscordUser();
        generalStore.needsUpdate = true;
        // await authStore.refreshChannels();
    });
}


export function logout() {
    authStore.logout();
    generalStore.needsUpdate = true;
}

export const Fallback = () => (
  <Root>
    <Stretch>
      <Name>Loading...</Name>
    </Stretch>
  </Root>
);
