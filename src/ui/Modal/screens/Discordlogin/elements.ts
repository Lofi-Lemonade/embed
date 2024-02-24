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

  button {
    width: 216px;

    @media (min-width: 290px) {
      scale: 1.3;
    }

    @media (min-width: 320px) {
      scale: 1.4;
    }

    @media (min-width: 350px) {
      scale: 1.5;
    }
  }
`
