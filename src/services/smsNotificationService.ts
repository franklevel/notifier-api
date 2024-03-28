import { User } from "../entities/User";
import { Notification } from "../entities/Notification";

export class SMSNotification {
  async send(notification: Notification, user: User): Promise<void> {
    console.log(`Sending SMS to ${user.email}: ${notification.message}`);
  }
}
