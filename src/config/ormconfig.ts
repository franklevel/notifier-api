import { Category } from "../entities/Category";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'notifier_user',
  password: 'notifier_pwd',
  database: 'notifier_db',
  entities: ['src/entities/*.ts', Category],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: true,
  logging: true,
});