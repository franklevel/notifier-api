export interface NotificationServiceInterface {
    sendNotification(message: string, categoryId:string): Promise<void>;
}
