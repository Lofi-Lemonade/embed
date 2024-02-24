import styled from '@lib/emotion'
import { ContentBase } from '@ui/Messages/Message/elements'

interface ThreadButtonProps {
    open: boolean
}
export const ThreadButton = styled.button<ThreadButtonProps>`
    cursor: pointer;
    margin: auto 8px;
    display: flex;
    gap: 4px;
    font-size: 1em;
    align-items: center;

    color: ${({theme, open}) => theme.colors._primary.fade(open ? 0 : 0.335).string()};
    
    &:hover {
        color: ${({theme}) => theme.colors._primary.fade(0.17).string()};
    }

    svg, path {
        color: inherit !important;
    }
`

interface DisplayProps {
    right: number
}
export const Display = styled.div<DisplayProps>`
    background: black;
    position: absolute;
    top: 40px;
    right: ${({right}) => right}px;
    width: 420px;
    overflow-y: auto;
    max-height: calc(100% - 40px);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 0 1px rgba(4,4,5,0.15), 0 8px 16px rgba(0,0,0,0.24);
    max-width: 100%;

    @media (max-width: 800px) {
        right: 0;
    }
`

export const Title = styled.div`
    background-color: ${({ theme }) => theme.colors._background.darken(0.41).string()};
    height: 48px;
    padding: 0 16px;
    font-family: var(--font-display);
    font-weight: 600;
    box-shadow: 0 1px 0 rgba(4,4,5,0.2), 0 1.5px 0 rgba(6,6,7,0.05), 0 2px 0 rgba(4,4,5,0.05);
    display: flex;
    align-items: center;
    
    svg {
        margin-right: 8px;
    }

    path {
        color: ${({theme}) => theme.colors._primary.fade(0.335).string()};
    }
`

export const List = styled.div`
    overflow-y: auto;
    background-color: ${({ theme }) => theme.colors._background.darken(0.15).string()};
    padding: 8px;
    min-height: 300px;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors._background.darken(0.5).string()};
        border-radius: 5px;
    }
`

export const Thread = styled.button`
    display: block;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    margin-bottom: 6px;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 15px;
    font-size: 16px;
    text-align: left;

    &:hover {
        border-color: ${({ theme }) => theme.colors._background.lighten(0.3).string()}
    }
`

export const ThreadName = styled.div`
  color: ${props => props.theme.colors._primary.fade(0.2).string()};
  font-weight: 600;
`;

export const Preview = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    pointer-events: none;
    display: flex;

    span span {
        opacity: 1;
    }
`

export const Time = styled(ContentBase)`
    margin: 0 4px;
`

export const NoThreads = styled.div`
    margin: 75px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        position: relative;
    }

    img {
        position: absolute;
        left: -10px;
    }

    span {
        margin-top: 20px;
        text-align: center;
        font-size: 24px;
        font-weight: 600;
    }
`

export const NoThreadsIcon = styled.div`
    background: ${({ theme }) => theme.colors.background};
    padding: 22px;
    border-radius: 100%;
    display: flex;

    svg {
        width: 36px;
        height: 36px;
    }
`
