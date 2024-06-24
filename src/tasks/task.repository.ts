import { DataSource, EntityRepository, Repository } from "typeorm";
import { TaskEntity } from "./task.entity";
import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { createTaskDto } from "./dto/createTask.dto";
import { Task, taskStatus } from "./dto/task.dto";
import { updateTaskDto } from "./dto/updateTask.dto";
import { GetTaskById } from "./dto/getTask.dto";

//@Injectable()
//@EntityRepository(TaskEntity)
@Injectable()
export class TasksRepository extends Repository<TaskEntity> {
    
    constructor(private dataSource: DataSource) {
        super(TaskEntity, dataSource.createEntityManager());
    }

    async getTaskById(id: string): Promise<TaskEntity> {
        console.log
        const task = this.findOneBy({id: id});

        if (!task) {
            throw new NotFoundException(`Document not found with id ${id}`);
        }
        return task;
    }

    async getAllTasks(): Promise<TaskEntity[]> {
        console.log('coming here')
        //return 'hello world'
        //let tasks = await this.find();
        const query = this.createQueryBuilder('TaskEntity');
        const tasks = await query.getMany();
       return tasks;
    }

    async createTask(createTaskDto: createTaskDto): Promise<any> {
        const {title, description, dueDate} = createTaskDto;
        const task = this.create({
            title,
            description,
            dueDate,
            status: taskStatus.OPEN
        })

        await this.save(task);
        return task;
    }

    async updateTask(updateTaskDto: updateTaskDto, docId: GetTaskById): Promise<any> {
        let obj: any = docId;
        console.log('wh', obj.id)
        const task = await this.getTaskById(String(obj.id))

        if (typeof updateTaskDto.description != 'undefined') {
            task.description = updateTaskDto.description
        }

        if (typeof updateTaskDto.title != 'undefined') {
            task.title = updateTaskDto.title
        }

        if (typeof updateTaskDto.status != 'undefined') {
            task.status = updateTaskDto.status
        }

        if (typeof updateTaskDto.dueDate != 'undefined') {
            task.dueDate = updateTaskDto.dueDate
        }

        await this.save(task)
        return task;

    }

    async deleteTask(taskId: string): Promise<any> {
        //const task = await this.getTaskById(taskId)
        let deletionResponse = await this.delete(taskId)
        if (deletionResponse.affected < 1) {
            return new InternalServerErrorException(`Error in deleting the taskID ${taskId}. Please check logs`)
        } 
        return `Deletion of taskId ${taskId} is successful`
    }

   async filterTask(status): Promise<any> {
    console.log('coming here', typeof status)
    const query = this.createQueryBuilder('TaskEntity')
    
    query.andWhere('TaskEntity.status = :status', {status: status})
    const tasks = await query.getMany();
    console.log('tasks', tasks);
    return tasks;

   }

   async searchTaskByName(searchString): Promise<any> {
    console.log('searchstring', searchString)
    //searchString = 'db'
    const query = this.createQueryBuilder('TaskEntity');

    //query.andWhere('TaskEntity.status = :status', {status: 'OPEN'})
    query.andWhere('LOWER(TaskEntity.title) LIKE LOWER(:search) OR LOWER(TaskEntity.description) LIKE  LOWER(:search)', {search: `%${searchString}%`})
    const tasks = await query.getMany()
    console.log('tasks1', tasks)
    return tasks;
   }

}