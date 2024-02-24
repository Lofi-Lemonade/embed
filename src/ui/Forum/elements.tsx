import styled from '@lib/emotion'
import { ContentBase, MiniUserNameBase } from '@ui/Messages/Message/elements'

export const Root = styled.div`
    height: 100%;
`

export const Username = styled(MiniUserNameBase)`
    margin: 0;
`

export const Separator = styled.span`
  margin-right: 4px;
  font-size: 14px;
  opacity: 0.64;
  font-weight: 500;
  white-space: nowrap;
  color: ${props => props.theme.colors._primary.fade(0.2).string()};
`;

export const List = styled.div`
    overflow-y: auto;
    background-color: ${({ theme }) => theme.colors._background.darken(0.25).string()};
    padding: 16px;
    height: 100%;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors._background.darken(0.5).string()};
        border-radius: 5px;
    }
`

export const Post = styled.button`
    display: block;
    width: 100%;
    background-color: ${({ theme }) => theme.colors._background.darken(.1).string()};
    margin-bottom: 8px;
    border: 1px solid transparent;
    border-radius: 12px;
    padding: 15px;
    font-size: 16px;
    text-align: left;
    transition: box-shadow .2s ease-out,transform .2s ease-out,background .2s ease-out,border .2s ease-out,-webkit-box-shadow .2s ease-out,-webkit-transform .2s ease-out;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0px 8px 16px 0 rgba(0, 0, 0, 0.24);
    }
`

export const PostName = styled.div`
  color: ${props => props.theme.colors._primary.fade(0.2).string()};
  font-weight: 600;
  font-size: 20px;
  padding-bottom: 6px;
`;

export const Preview = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    pointer-events: none;
    display: flex;
    padding-bottom: 8px;

    span span {
        opacity: 1;
        font-weight: 600;
    }
`

export const Footer = styled.span`
    margin: 0 4px;
    gap: 8px;

    font-size: 14px;
    cursor: pointer;
    white-space: nowrap;
    display: flex;
    align-items: center;
`

export const MessageCount = styled.span`
    display: flex;
    gap: 4px;
    align-items: center;

    svg, path {
        color: ${({ theme }) => theme.colors._primary.fade(0.2).string()};
    }
`

export const Divider = styled.span`
    font-family: "Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
    color: ${({ theme }) => theme.colors._primary.fade(0.9).string()};

`

export const Time = styled.span`
    color: ${({ theme }) => theme.colors._primary.fade(0.36).string()};
`
