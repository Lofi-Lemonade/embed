import { generalStore } from '@store'
import { Loading } from '@ui/Overlays/Loading/elements'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { ThreadButton, Display, Title, List, Thread, NoThreads, Preview, ThreadName, NoThreadsIcon, Time } from './elements'
import stars from '@images/discordAssets/stars.svg'
import Tooltip from 'rc-tooltip'
import THREADS from './Threads.graphql'
import { Threads, ThreadsVariables, Threads_channel_threads_ThreadChannel } from '@generated';
import { useRouter } from '@hooks';
import Content from '@ui/Messages/Content';
import { MiniUserAvatarBase, MiniUserNameBase, ReplyUserBase } from '@ui/Messages/Message/elements';
import getAvatar from '@utils/getAvatar';
import { convertColor, getDominantRoleColor } from '@ui/Messages/Message/MessageAuthor';
import { useQuery } from 'react-apollo-hooks';
import { addNotification } from 'notify';
import { formatError } from '@views/Messages/utils';
import moment from 'moment'
import { short } from './short'

const ThreadIcon = <svg x="0" y="0" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z"></path><path fill="currentColor" d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z"></path></svg>

const queryParams = new URLSearchParams(location.search)

export default observer(({ count }: { count: number }) => {
    const [open, setOpen] = useState(false)
    const [right, setRight] = useState(0)
    let button: HTMLElement
    let display: HTMLDivElement

    const { guild, channel } = useRouter()    

    const { data, loading, error } = useQuery<Threads, ThreadsVariables>(THREADS, { skip: !open && !queryParams.has('thread'), variables: { guild, channel }, fetchPolicy: 'network-only'})

    useEffect(() => {
        setRight(innerWidth - button.getBoundingClientRect().right)

        const handleShortcut = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === 'p') {
                event.preventDefault()
                generalStore.togglePins()
            }
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (![display, button].some(e => e?.contains(event.target as Node))) setOpen(false)
        }

        document.addEventListener('keydown', handleShortcut)
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('keydown', handleShortcut)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })

    useEffect(() => {
        if (error) addNotification({
            level: 'error',
            title: 'Error loading threads',
            message: formatError(error),
            autoDismiss: 0,
        })
    }, [error?.message])

    useEffect(() => {
        if (queryParams.has('thread') && !generalStore.openedDefaultThread) {
            const threads = data?.channel?.threads as Threads_channel_threads_ThreadChannel[]
            if (threads) {
                const thread = threads.find(t => t.id === queryParams.get('thread'))
                if (thread) {
                    generalStore.setActiveThread(thread)
                    generalStore.setThreadFullscreen(true)
                } else {
                    addNotification({
                        level: 'error',
                        title: 'Could not find default thread',
                        message: 'The thread does not exist or it has been archived',
                        autoDismiss: 0,
                    })
                }
                generalStore.setOpenedDefaultThread()
            }
        }
    }, [data?.channel?.threads])

    return <>
        <Tooltip
            placement="bottom"
            overlay="Threads"
        >
            <ThreadButton innerRef={ref => (button = ref)} onClick={() => setOpen(curr => !curr)} open={open} className="thread-button">
                {ThreadIcon}
                {count || ''}
            </ThreadButton>
        </Tooltip>
        {open && <Display right={right} innerRef={ref => (display = ref)} className="pin-display">
            <Title className="threads-title">{ThreadIcon} Threads</Title>
            <List className="threads-list">
                {!loading
                    ? data?.channel?.threads?.length
                        ? <>{(data.channel.threads as Threads_channel_threads_ThreadChannel[])
                            ?.sort((a, b) => +b.messageBunch.messages.at(-1).id - +a.messageBunch.messages.at(-1).id)
                            .map(thread => {
                                const lastMessage = thread.messageBunch.messages.at(-1)
                                const color = convertColor(getDominantRoleColor(lastMessage.author.roles))

                                return <Thread key={thread.id} onClick={() => {
                                    generalStore.setActiveThread(thread)
                                    setOpen(false)
                                }}>
                                    <ThreadName>{thread.name}</ThreadName>
                                    <Preview>
                                        <ReplyUserBase>
                                            <MiniUserAvatarBase src={getAvatar(lastMessage.author, { size: 24, animated: false })} />
                                            <MiniUserNameBase color={color}>{lastMessage.author.name}:</MiniUserNameBase>
                                        </ReplyUserBase>
                                        <Content message={lastMessage} isReplyContent={true} />
                                        <Time isReplyContent={true}> • {short(moment(lastMessage.createdAt))}</Time>
                                    </Preview>
                                </Thread>
                            }
                        )}</>
                        : <NoThreads className="no-threads">
                            <div>
                                <img src={stars} alt="" draggable={false} />
                                <NoThreadsIcon>{ThreadIcon}</NoThreadsIcon>
                            </div>
                            <span>There are no active threads.</span>
                        </NoThreads>
                    : <div><Loading /></div>
                }
            </List>
        </Display>}
    </>
})
