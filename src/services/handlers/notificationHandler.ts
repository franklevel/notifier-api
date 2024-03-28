import { SMSNotification } from "../../services/smsNotificationService";
import { NotificationChannel } from "../../enums/NotificationChannel";
import { EmailNotification } from "../../services/emailNotificationService";
import { PushNotification } from "../../services/pushNotificationService";
import { User } from "../../entities/User";
import { Notification } from "../../entities/Notification";

type NotificationHandlerTypes = {
  [key in NotificationChannel]: (notification: Notification, user: User) => void;
}

export const notificationHandlers: NotificationHandlerTypes = {
  [NotificationChannel.SMS]: (notification: Notification, user: User) => {
    const smsNotification = new SMSNotification();
    smsNotification.send(notification, user);
  },
  [NotificationChannel.Email]: (notification: Notification, user: User) => {
    const emailNotification = new EmailNotification();
    emailNotification.send(notification, user);
  },
  [NotificationChannel.PushNotification]: (
    notification: Notification,
    user: User
  ) => {
    const pushNotification = new PushNotification();
    pushNotification.send(notification, user);
  },
};
