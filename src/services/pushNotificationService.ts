import { User } from "../entities/User";
import { NotificationStrategy } from "../interfaces/notificationStrategyInterface";
import { Notification } from "../entities/Notification";

export class PushNotification  implements NotificationStrategy{
  async send(notification: Notification, user: User): Promise<void> {
    console.log(`Sending push notification to ${user.deviceToken}: ${notification.message}`);
  }
}
