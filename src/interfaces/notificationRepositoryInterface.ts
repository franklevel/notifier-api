import { Notification } from '../entities/Notification';

export interface NotificationRepositoryInterface {
    createNotification(notification: Notification): Promise<Notification>;
}
