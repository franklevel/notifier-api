import { Repository } from "typeorm";
import { Notification } from "../entities/Notification";
import { AppDataSource } from "../config/ormconfig";

export class NotificationRepository {
  private notificationRepository: Repository<Notification>;

  constructor() {
    this.notificationRepository = AppDataSource.getRepository(Notification);
  }

  async createNotification(notification: Notification): Promise<Notification> {
    return this.notificationRepository.save(notification);
  }

  async getAll(): Promise<Notification[]> {
    return this.notificationRepository.find({
      relations: ['category', 'channel'],
      order: {
        createdAt: "DESC",
      },
    });
  }
}
