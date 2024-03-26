import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Category } from './Category';
import { Channel } from './Channel';

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

    @CreateDateColumn()
    createdAt: Date;

    constructor(message: string, category: Category, channel: Channel) {
        this.message = message;
        this.category = category;
        this.channel = channel;
        this.id = uuidv4();
    }
}
