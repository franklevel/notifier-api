import { CategoryServiceInterface } from "../interfaces/categoryServiceInterface";
import { CategoryRepositoryInterface } from "../interfaces/categoryRepositoryInterface";
import { Category } from "../entities/Category";


export class CategoryService implements CategoryServiceInterface {
  constructor(
    private readonly categoryRepository: CategoryRepositoryInterface,
  ) {}

  async getAll(): Promise<Category[]> {
    return await this.categoryRepository.findAll();
  }
}
