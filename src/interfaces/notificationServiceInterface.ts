import { Notification } from "../entities/Notification";
export interface NotificationServiceInterface {
    sendNotification(message: string, categoryId:string): Promise<void>;
    getAll(): Promise<Notification[]>;
}
