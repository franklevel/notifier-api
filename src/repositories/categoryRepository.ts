import { Repository } from "typeorm";
import { Category } from "../entities/Category";
import { AppDataSource } from "../config/ormconfig";

export class CategoryRepository {
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
