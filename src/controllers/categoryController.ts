import { Request, Response } from "express";
import { CategoryService } from "../services/categoryService";
import { CategoryRepository } from "../repositories/categoryRepository";
import { Category } from "../entities/Category";

const categoryRepository = new CategoryRepository();

const categoryService = new CategoryService(categoryRepository);

export const getAll = async (
  req: Request,
  res: Response
): Promise<Category[] | void> => {
  try {
    const categories = await categoryService.getAll();
    console.log({ categories });
    res.status(200).json({ categories });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to send Category", error });
  }
};
