import { Category } from "../entities/Category";

export interface CategoryServiceInterface {
     getAll(): Promise<Category[]>;
}
