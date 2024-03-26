import { Category } from '../entities/Category';

export interface CategoryRepositoryInterface {
    findOne(categoryId: string): Promise<Category>;
    findAll(): Promise<Category[]>;
}
