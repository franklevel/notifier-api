import { User } from "../entities/User";

export interface NotificationStrategy {
  send(notification: Notification, user: User): Promise<void>;
}
