/* eslint-disable no-case-declarations */
import { UserRepositoryInterface } from "../interfaces/userRepositoryInterface";
import { NotificationServiceInterface } from "../interfaces/notificationServiceInterface";
import { NotificationRepositoryInterface } from "../interfaces/notificationRepositoryInterface";
import { mapUserToDTO } from "../mappers/UserMapper";
import { SMSNotification } from "./smsNotificationService";
import { EmailNotification } from "./emailNotificationService";
import { PushNotification } from "./pushNotificationService";
import { Notification } from "../entities/Notification";
import { ChannelRepositoryInterface } from "../interfaces/channelRepositoryInterface";
import { CategoryRepositoryInterface } from "../interfaces/categoryRepositoryInterface";
import { NotificationChannel } from "../enums/NotificationChannel";
import { User } from "../entities/User";

const notificationHandlers = {
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

export class NotificationService implements NotificationServiceInterface {
  constructor(
    private readonly userRepository: UserRepositoryInterface,
    private readonly notificationRepository: NotificationRepositoryInterface,
    private readonly categoryRepository: CategoryRepositoryInterface,
    private readonly channelRepository: ChannelRepositoryInterface
  ) {}

  async sendNotification(message: string, categoryId: string): Promise<void> {
    const users = await this.userRepository.findSubscribedUsers(categoryId);
    const mappedUsers = users?.map((user) => mapUserToDTO(user));
    const category = await this.categoryRepository.findOne(categoryId);

    mappedUsers.forEach((user) => {
      user.notificationChannels.forEach(async (channelName) => {
        const channel = await this.channelRepository.findByName(channelName);
        console.log(channel);
        if (!channel) {
          throw new Error("There is not a valid channel");
        }
        const notification = new Notification(message, category, channel);

        const handler = notificationHandlers[channelName];
        if (handler) {
          handler(notification, user);
        } else {
          console.error("Invalid notification channel");
        }
        await this.notificationRepository.createNotification(notification);
      });
    });

    console.log({ message, categoryId });
  }

  async getAll(): Promise<Notification[]> {
    return await this.notificationRepository.getAll();
  }
}
