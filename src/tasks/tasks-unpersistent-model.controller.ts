// /* import { Body, Controller, Get, Param, Post, Delete, Patch, HttpException, HttpStatus, Query } from '@nestjs/common';
// import { TasksService } from './tasks.service';
// //import { Task, taskStatus } from './task.model';
// import { v4 as uuid } from 'uuid';
// import { createTaskDto } from './dto/createTask.dto';
// import { GetTaskById, GetTaskBySearch} from './dto/getTask.dto';
// import { Task, taskStatus } from './dto/task.dto';
// import { deleteTaskDto } from './dto/deleteTask.dto';
// import { updateTaskDto } from './dto/updateTask.dto';
// import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
// //import { taskStatus } from './task.model';

// @Controller('tasks')
// export class TasksController {
//     /* old way of accessing taskSerice by defining a property in the class
//     taskService: TasksService
//     constructor(taskService: TasksService) {
//       this.taskService = taskService;
 
//     }
 
//     helloWorld() {
//       this.taskService
//     } */
//     constructor(private taskService: TasksService) {
//     }

//     @Get()
//     getAllTasks(
//         @Query('status') query: taskStatus,
//         @Query('search') query1: GetTaskBySearch
//     ): Task[] {
//         if (typeof query !== 'undefined') {
//             return this.taskService.getTaskByFilter(query);
//         } 
//         if (typeof  query1 !== 'undefined') {
//             return this.taskService.getTaskBySearchTerm(query1);
//         }
//         return this.taskService.getAllTasks();
//     }

//     /**
//      *  Get a task by it's ID
//      * @param createTaskDto
//      * @returns 
//      */
//     @Get(':id')
//     getTaskById(@Param() GetTaskById): Task {
//         console.log('params', GetTaskById)
//         // if task found, return task else return a error message
//         let task: Task = this.taskService.getTaskById(GetTaskById);
//         if (task) {
//             return task;
//         } else {
//             throw new HttpException('Task ID not found', HttpStatus.NOT_FOUND)
//         }
//         //return this.taskService.getTaskById(GetTaskById);
//     }

//     /**
//      * Get tasks by search for a string in title / description field
//      * @param 
//      * @returns 
//      */
//     getTaskBySearchTerm(@Query('search') searchItem:GetTaskBySearch): Task[] {
//         console.log('query', searchItem)

//         return []
//     }

//    /*  @Post() old way of writing a controller task
//     createTask(@Body('description') description, @Body('title') title, @Body('dueDate') dueDate) {
//         console.log('body', description)
//         return this.taskService.createTask(title, description, dueDate)
//     } */

//     @Post()
//     createTask(@Body() createTaskDto: createTaskDto) {
//         return this.taskService.createTask(createTaskDto)
//     }
    

//     /**
//      * Delete a task by its Id
//      * @param deleteTaskDto 
//      * @returns 
//      */
//     @Delete(':id')
//     deleteTask(@Param() deleteTaskDto: deleteTaskDto):Task[] {
//         return this.taskService.deleteTask(deleteTaskDto)
//     }

//     /**
//      * Update a task by checking the path value and its new value on the request body
//      * 
//      */
//     @Patch(':id/')
//     updateTask(@Param('id') id:string, @Body() updateTaskDto: updateTaskDto) {
//         console.log(id)
//         return this.taskService.updateTask(updateTaskDto, id)
//     }
// }
//  */