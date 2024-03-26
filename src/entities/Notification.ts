import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Category } from './Category';
import { Channel } from './Channel';
import { User } from './User';

@Entity()
export class Notification {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    message: string;

    @ManyToOne(() => Category, category => category.id)
    category: Category;
    
    @ManyToOne(() => Channel, channel => channel.id)
    channel: Channel;

    @ManyToOne(() => User, user => user.id)
    user: User;

    @CreateDateColumn()
    createdAt: Date;

    constructor(message: string, category: Category, channel: Channel, user: User) {
        this.message = message;
        this.category = category;
        this.channel = channel;
        this.user = user;
        this.id = uuidv4();
    }
}
