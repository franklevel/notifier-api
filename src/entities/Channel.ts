import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Channel {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}
