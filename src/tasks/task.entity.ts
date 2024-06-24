import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { taskStatus } from "./dto/task.dto";

@Entity()
export class TaskEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    title?: string;

    @Column()
    description?: string;

    @Column()
    status?: taskStatus;

    @Column()
    dueDate?: string;

}