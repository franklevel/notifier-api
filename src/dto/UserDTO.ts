import { Channel } from "../entities/Channel";
import { Category } from "../entities/Category";

export interface UserDTO {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  deviceToken: string;
  subscribedCategories: Category[];
  notificationChannels: Channel[];
}
