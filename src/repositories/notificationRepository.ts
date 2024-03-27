import { Repository } from "typeorm";
import { Notification } from "../entities/Notification";
import { AppDataSource } from "../config/ormconfig";
import { NotificationRepositoryInterface } from "../interfaces/notificationRepositoryInterface";

export class NotificationRepository implements NotificationRepositoryInterface{
  private notificationRepository: Repository<Notification>;

  constructor() {
    this.notificationRepository = AppDataSource.getRepository(Notification);
  }

  async createNotification(notification: Notification): Promise<Notification> {
    return this.notificationRepository.save(notification);
  }

  async getAll(): Promise<Notification[]> {
    return this.notificationRepository.find({
      relations: ['user','category', 'channel'],
      order: {
        createdAt: "DESC",
      },
    });
  }
}
