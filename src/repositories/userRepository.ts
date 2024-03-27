import { Repository } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "../config/ormconfig";
import { UserRepositoryInterface } from "../interfaces/userRepositoryInterface";

export class UserRepository implements UserRepositoryInterface{
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async findSubscribedUsers(categoryId: string): Promise<User[]> {
    return this.userRepository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.subscribedCategories", "category")
      .leftJoinAndSelect("user.notificationChannels", "channel")
      .where("category.id = :categoryId", { categoryId })
      .getMany();
  }

  async saveMany(users: User[]): Promise<User[]> {
    return this.userRepository.save(users);
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }
}
