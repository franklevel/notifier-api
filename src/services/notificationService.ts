/* eslint-disable no-case-declarations */
import { UserRepositoryInterface } from "../interfaces/userRepositoryInterface";
import { NotificationServiceInterface } from "../interfaces/notificationServiceInterface";
import { NotificationRepositoryInterface } from "../interfaces/notificationRepositoryInterface";
import { mapUserToDTO } from "../mappers/UserMapper";
import { Notification } from "../entities/Notification";
import { ChannelRepositoryInterface } from "../interfaces/channelRepositoryInterface";
import { CategoryRepositoryInterface } from "../interfaces/categoryRepositoryInterface";
import { notificationHandlers } from "./handlers/notificationHandler";

export class NotificationService implements NotificationServiceInterface {
  constructor(
    private readonly userRepository: UserRepositoryInterface,
    private readonly notificationRepository: NotificationRepositoryInterface,
    private readonly categoryRepository: CategoryRepositoryInterface,
    private readonly channelRepository: ChannelRepositoryInterface
  ) {}

  async sendNotification(message: string, categoryId: string): Promise<void> {
    const users = await this.userRepository.findSubscribedUsers(categoryId);
    console.log({ users });
    const mappedUsers = users?.map((user) => mapUserToDTO(user));
    const category = await this.categoryRepository.findOne(categoryId);
    console.log({ mappedUsers });
    mappedUsers.forEach((user) => {
      user.notificationChannels.forEach(async (channel) => {
        console.log({ channel, user });
        if (!channel || !user) {
          throw new Error("There is not a valid channel or user not found");
        }
        const notification = new Notification(
          message,
          category,
          channel,
          user
        );
        const handler = notificationHandlers[channel.name];
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
