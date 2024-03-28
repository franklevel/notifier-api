import { User } from "../entities/User";
import { Notification } from "../entities/Notification";
import { NotificationStrategy } from "../interfaces/notificationStrategyInterface";

export class EmailNotification implements NotificationStrategy{
  async send(notification: Notification, user: User): Promise<void> {
    console.log(`Sending email to ${user.email}: ${notification.message}`);
  }
}
