import styled from "@lib/emotion";
import * as Modal from "@ui/Modal";

export const Root = styled(Modal.Content)`
  text-align: center;
  user-select: none;
  max-width: 95%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  overflow: visible;
`

export const Top = styled.div`
  display: flex;
  margin: auto;
  padding: 0 16px;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-top: 24px;
  margin-bottom: 8px;
`

export const Text = styled.div`
  color: ${props => props.theme.colors._primary.fade(0.2).string()};
  margin-bottom: 16px;
`

export const LinkBox = styled.div`
  border: 1px solid hsl(228 6% 32.5% /0.48);
  max-width: 498px;
  min-width: min(408px,calc(100vw - 50px));
  border-radius: 8px;
  padding: 16px;
  color: ${({theme}) => theme.colors._primary.fade(0.5).string()};
  text-align: left;
  margin-bottom: 24px;
`

export const Domain = styled.strong`
  color: ${props => props.theme.colors._primary.fade(0.2).string()};
  font-weight: 600;
`

export const Buttons = styled.div`
  background-color: ${({ theme }) => theme.colors._background.darken(0.15).string()};
  padding: 16px;
  display: flex;
  flex-direction: row-reverse;
  border-radius: 0 0 5px 5px;
`

const Button = styled.button`
  width: 96px;
  height: 38px;
  font-weight: 500;
  border-radius: 3px;
  font-size: 14px;
`

export const CancelButton = styled(Button)`
  &:hover {
    text-decoration: underline;
  }
`

export const VisitButton = styled(Button)`
  transition: background-color .17s ease,color .17s ease;

  background-color: #5865f2;

  &:hover {
    background-color: #4752c4;
  }

  &:active {
    background-color: #3c45a5;
  }
`;
