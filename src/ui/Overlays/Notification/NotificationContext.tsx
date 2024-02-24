import {createContext, ReactNode} from "react";

export interface Notification {
  shownAt: Date;
  hideAfter?: number;
  content: ReactNode;
}

type NotificationCtx = (notification: Omit<Notification, "shownAt">) => void;

export const NotificationContext = createContext<NotificationCtx | null>(null);
