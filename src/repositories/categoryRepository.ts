import { Repository } from "typeorm";
import { Category } from "../entities/Category";
import { AppDataSource } from "../config/ormconfig";
import { CategoryRepositoryInterface } from "../interfaces/categoryRepositoryInterface";

export class CategoryRepository implements CategoryRepositoryInterface{
  private categoryRepository: Repository<Category>;

  constructor() {
    this.categoryRepository = AppDataSource.getRepository(Category);
  }

  async findOne(categoryId: string): Promise<Category> {
    return this.categoryRepository.findOneBy({id: categoryId});
  }
  
  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }
}
