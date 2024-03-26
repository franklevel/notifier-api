import { SMSNotification } from "../../services/smsNotificationService";
import { NotificationChannel } from "../../enums/NotificationChannel";
import { EmailNotification } from "../../services/emailNotificationService";
import { PushNotification } from "../../services/pushNotificationService";
import { User } from "../../entities/User";
import { Notification } from "../../entities/Notification";

export const notificationHandlers = {
  [NotificationChannel.SMS]: async (notification: Notification, user: User) => {
    const smsNotification = new SMSNotification();
    smsNotification.send(notification.message, user.phoneNumber);
  },
  [NotificationChannel.Email]: async (
    notification: Notification,
    user: User
  ) => {
    const emailNotification = new EmailNotification();
    emailNotification.send(notification.message, user.email);
  },
  [NotificationChannel.PushNotification]: async (
    notification: Notification,
    user: User
  ) => {
    const pushNotification = new PushNotification();
    pushNotification.send(notification.message, user.deviceToken);
  },
};
