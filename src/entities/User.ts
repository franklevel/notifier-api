import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Category } from "./Category";
import { Channel } from "./Channel";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  deviceToken: string;

  @ManyToMany(() => Category)
  @JoinTable()
  subscribedCategories: Category[];

  @ManyToMany(() => Channel)
  @JoinTable()
  notificationChannels: Channel[];
}
