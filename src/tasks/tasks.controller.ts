import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './dto/task.dto';
import { GetTaskByFilter, GetTaskById, GetTaskBySearch, getRequestObject } from './dto/getTask.dto';
import { createTaskDto } from './dto/createTask.dto';
import { TaskEntity } from './task.entity';
import { updateTaskDto } from './dto/updateTask.dto';
import { query } from 'express';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {

    }

    /**
     * Get a task by it's ID value sent on the request
     * 
     */
    @Get(':id')
    getTaskById(@Param() id: GetTaskById): any {
        console.log('param', id)
        return this.taskService.getTaskById(id)
    }

    @Get()
    getAllTasks(
       @Query() requestQuery: getRequestObject
    ): Promise<any> {
        console.log('what is the qeury', requestQuery.hasOwnProperty('status'))
        console.log('what is q', requestQuery)
        let obj: any = requestQuery

        if (!requestQuery.hasOwnProperty('status') && !requestQuery.hasOwnProperty('search')) {
            return this.taskService.getAllTasks() 
        }

        if (requestQuery.hasOwnProperty('status')) {
            return this.taskService.getTaskByFilter(requestQuery.status)
        }

        if (requestQuery.hasOwnProperty('search')) {
            return this.taskService.getTaskBySearch(obj.search);
        }
      
        // if (typeof status == 'undefined' && typeof search == 'undefined') {
        //     console.log('what this hello')
        //     return this.taskService.getAllTasks()
        // }
        // if (typeof status != 'undefined') {
        //     console.log('shear')
        //     return this.taskService.getTaskByFilter(String(status))
        // }
        // if (typeof search != 'undefined') {
        //     return this.taskService.getTaskBySearch(search)

        // }
        
        
    }

    /**
     * create a task by taking data from the request body
     * 
     * @param createTaskDto 
     * @returns 
     */

    @Post()
    createTask(@Body() createTaskDto: createTaskDto): Promise<TaskEntity> {
        return this.taskService.createTask(createTaskDto)
    }

    /**
     * update a task by parsing the request body 
     */
    @Patch(':id')
    updateTask(@Body() updateTaskDto: updateTaskDto, @Param() id: GetTaskById): Promise<TaskEntity> {
        console.log('id', id )
        return this.taskService.updateTask(updateTaskDto, id)
    }

    /**
     * Delete a task by receving the task ID from the path value
     */
    @Delete(':id')
    deleteTask(@Param() id: string): any {
        console.log('wht is param', id)
        return this.taskService.deleteTask(id)
    }


}
