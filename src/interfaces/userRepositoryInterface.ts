import { User } from '../entities/User';

export interface UserRepositoryInterface {
    findSubscribedUsers(category: string): Promise<User[]>;
    saveMany(users: User[]): Promise<User[]>;
}
