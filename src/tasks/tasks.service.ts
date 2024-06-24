import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { TasksRepository } from './task.repository';
import { Task, taskStatus } from './dto/task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { createTaskDto } from './dto/createTask.dto';
import { resolve } from 'path';
import { GetTaskById, GetTaskBySearch } from './dto/getTask.dto';
import { updateTaskDto } from './dto/updateTask.dto';

@Injectable()
export class TasksService  {

    constructor(
        @InjectRepository(TasksRepository)
        private taskRepository: TasksRepository
    ) {

    }

    async getTaskById(id: GetTaskById): Promise<TaskEntity> {
        const taskFound =  await this.taskRepository.findOneBy(id)
        if (!taskFound) {
            throw new NotFoundException(`Task with ID ${id} not found`)
        }
        //return Promise.resolve('')
        return Promise.resolve(taskFound)
    }

    async getAllTasks(): Promise<any> {
        console.log('helo wrold')
        let tasks = this.taskRepository.getAllTasks();

        return Promise.resolve(tasks);
    }

    async getTaskByFilter(status: string): Promise<any> {
        return this.taskRepository.filterTask(status)
    }

    async getTaskBySearch(searchString: string): Promise<any> {
        return this.taskRepository.searchTaskByName(searchString)
    }

    async createTask(createTaskDto: createTaskDto): Promise<TaskEntity> {
        /* const {title, description} = createTaskDto

        let task = this.taskRepository.create({
            title,
            description,
            status: taskStatus.OPEN
        })

        await this.taskRepository.save(task);

        return task; */
        return this.taskRepository.createTask(createTaskDto);
    }

    async updateTask(updateTaskDto: updateTaskDto, docId: GetTaskById): Promise<TaskEntity> {
        console.log('service', updateTaskDto, docId)
        return this.taskRepository.updateTask(updateTaskDto, docId)
    }

    async deleteTask(taskId: string): Promise<any> {
        return this.taskRepository.deleteTask(taskId);
    }

}
