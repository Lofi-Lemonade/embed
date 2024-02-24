import {
  NotificationContext
} from "@ui/Overlays/Notification/NotificationContext";
import {
  ReactNode,
  useEffect,
  useRef,
  useState
} from "react";
import { Notification } from "@ui/Overlays/Notification/NotificationContext";
import {
  NotificationBase,
  NotificationContentBase,
  NotificationProgressBar, NotificationProgressBarContainer, SlideIn,
  SlideOut,
  slideOutAnimDurationMs
} from "@ui/Overlays/Notification/elements";
import {setInterval} from "timers";

interface NotificationProps {
  children: ReactNode;
}

const progressBarIntervalMs = 200;

function Notification(props: NotificationProps) {
  const [queue, setQueue] = useState<Notification[]>([]);
  const notifRef = useRef<Notification | null>(null);
  const queueRef = useRef<Notification[] | null>(null);
  const notifElementRef = useRef(null);
  const [timeToHide, setTimeToHide] = useState(0);
  queueRef.current = queue;
  notifRef.current = queueRef.current[0];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!notifRef.current)
        return;

      const progress = (notifRef.current.shownAt.getTime() + notifRef.current.hideAfter) - Date.now();

      if (progress < 1) {
        const [nextUp, ...rest] = queueRef.current.slice(1);
        setQueue(nextUp ? [{...nextUp, shownAt: new Date()}, ...rest] : []);
      }

      setTimeToHide(progress);
    }, progressBarIntervalMs)

    return () => clearInterval(interval);
  }, [notifRef.current, queue]);

  function spawn(notification: Omit<Notification, "shownAt">) {
    const notif = {...notification, hideAfter: notification.hideAfter + slideOutAnimDurationMs, shownAt: new Date()};

    if (queue.length === 0)
      setTimeToHide(notif.hideAfter);

    setQueue([...queue, notif]);
  }

  return (
    <NotificationContext.Provider
      value={spawn}
    >
      {Boolean(notifRef.current) && (
        <NotificationBase
          hideAfterMs={notifRef.current.hideAfter}
          ref={notifElementRef}
          className={timeToHide < slideOutAnimDurationMs ? SlideOut : SlideIn}
        >
          <NotificationContentBase>
            {notifRef.current.content}
          </NotificationContentBase>
          <NotificationProgressBarContainer>
            <NotificationProgressBar
              style={{
                width: (timeToHide / notifRef.current.hideAfter * 100) + "%"
              }}
            />
          </NotificationProgressBarContainer>
        </NotificationBase>
      )}
      {props.children}
    </NotificationContext.Provider>
  );
}

export default Notification;
