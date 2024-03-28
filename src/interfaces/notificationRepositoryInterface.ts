import { Notification } from "../entities/Notification";

export interface NotificationRepositoryInterface {
  createNotification(notifications: Notification[]): Promise<Notification[]>;
  getAll(): Promise<Notification[]>;
}
