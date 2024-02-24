import styled from "@lib/emotion";
import * as Modal from "@ui/Modal";

export const Root = styled(Modal.Content)`
  user-select: none;
  width: 440px;
  max-width: 95%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  overflow: visible;
`

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-grow: 1;
  margin: 0;
  margin: 16px;
`

export const Text = styled.div`
  margin: 0 16px 20px;
  color: ${({theme}) => theme.colors._primary.fade(1 - 0.827).string()};
`

export const Preview = styled.div`
  box-shadow: 0 0 0 1px hsla(216,7.2%,13.5%,.6),0 2px 10px 0 hsla(0,0%,0%,.2);
  border-radius: 3px;
  padding: 10px 0;
  user-select: text;
  margin: 0 16px 20px;
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

export const DeleteButton = styled(Button)`
  transition: background-color .17s ease,color .17s ease;

  background-color: hsl(359,66.7%,54.1%);

  &:hover {
    background-color: hsl(359,56.3%,40.4%);
  }

  &:active {
    background-color: hsl(359,56.4%,35.1%);
  }
`;
