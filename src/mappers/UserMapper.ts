import { User } from "../entities/User";
import { UserDTO } from "../dto/UserDTO";

export function mapUserToDTO(user: User): UserDTO {
  const userDTO: UserDTO = {
    id: user.id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    deviceToken: user.deviceToken,
    subscribedCategories: user.subscribedCategories.map(
      (category) => category.name
    ),
    notificationChannels: user.notificationChannels.map(
      (channel) => channel.name
    ),
  };

  return userDTO;
}
