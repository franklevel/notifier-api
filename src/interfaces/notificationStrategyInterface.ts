import { Notification } from './../entities/Notification';
import { User } from "../entities/User";

export interface NotificationStrategy {
send(notification: Notification, user: User): void;
}
