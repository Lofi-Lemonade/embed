import styled, {css} from "react-emotion";

export const slideOutAnimDurationMs = 300;

export const SlideIn = css`
  animation: slide-in 0.5s ease-in;
  animation-fill-mode: forwards;
`;

export const SlideOut = css`
  animation: slide-out ${slideOutAnimDurationMs}ms ease-out;
  animation-fill-mode: forwards;
`;

export const NotificationBase = styled.div<{hideAfterMs?: number}>`
  $default-transform: translateY(100%);
  
  position: fixed;
  top: 32px;
  right: 32px;
  z-index: 10000;
  border-radius: 9px;
  //animation: slide-in 0.5s ease-in, slide-out ${slideOutAnimDurationMs}ms ease-out ${props => props.hideAfterMs - slideOutAnimDurationMs - 5}ms;
  background-color: ${props => props.theme.colors._background.darken(0.3).string()};
  max-width: calc(100% - 200px);
  min-width: 200px;
  overflow: hidden;
  
  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateY(-200%);
    }
    
    to {
      opacity: 1;
      transform: $default-transform;
    }
  }
  @keyframes slide-out {
    from {
      opacity: 1;
      transform: $default-transform;
    }
    
    to {
      opacity: 0;
      transform: translateY(-200%);
    }
  }
`;

export const NotificationContentBase = styled.div`
  padding: 10px;
`;

export const NotificationProgressBarContainer = styled.div`
  height: 5px;
  background-color: ${props => props.theme.colors._background.darken(0.4).string()};
`;

export const NotificationProgressBar = styled.div`
  height: 5px;
  //transition: width 200ms linear;
  background-color: ${props => props.theme.colors.accent};
`;
