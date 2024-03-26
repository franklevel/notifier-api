export interface UserDTO {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  deviceToken: string;
  subscribedCategories: string[];
  notificationChannels: string[];
}
