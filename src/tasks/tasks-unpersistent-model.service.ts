// import { Injectable } from '@nestjs/common';
// //import {Task} from './task.model';
// import {v4 as uuid} from 'uuid'
// //import { taskStatus } from './task.model';
// import { createTaskDto } from './dto/createTask.dto';
// import { Task, taskStatus } from './dto/task.dto';
// import { GetTaskById, GetTaskBySearch } from './dto/getTask.dto';
// import { deleteTaskDto } from './dto/deleteTask.dto';
// import { updateTaskDto } from './dto/updateTask.dto';

// @Injectable()
// export class TasksService {
//     private tasks:Task[] = [];

//     getAllTasks():Task[] {
//         return this.tasks;
//     }

//     /**
//      * Get a Task by it's Id
//     */
//     getTaskById(getTaskById: GetTaskById): Task {
//         const {id} = getTaskById;
//         console.log('coming to service', id)
//         return this.tasks.filter(e => e.id === id)[0]
//     }

//     getTaskByFilter(filter: taskStatus): Task[] {
//         console.log('coming here', filter)
//         return this.tasks.filter(e => e.status === filter)
//     }

//     getTaskBySearchTerm(searchTerm: GetTaskBySearch): Task[] {
//         // return this.tasks.filter(e => {
//         //     if (e.title.toLowerCase().includes(String(searchTerm).toLowerCase())) {
//         //         return e
//         //     }
//         //     if (e.description.toLowerCase().includes(String(searchTerm).toLowerCase())) {
//         //         return e
//         //     }
//         // })
//         return this.tasks.filter(e => e.title.toLowerCase().includes(String(searchTerm).toLowerCase()) || e.description.toLowerCase().includes(String(searchTerm).toLowerCase()))
//     }

//     // createTask(title: string, description: string, dueDate: string):string {
//     //     console.log('coming to task service')
//     //     const task:Task = {
//     //         title: title,
//     //         description: description,
//     //         dueDate: dueDate,
//     //         id: uuid(),
//     //         status: taskStatus.OPEN
//     //     }
//     //     this.tasks.push(task);
//     //     return 'hello world';
//     // }

//     /**
//      * Create it using dto ( data transfer object, so u don't change arguments )
//      */
//     createTask(createTaskDto: createTaskDto) {
//         const {title, description, dueDate, status} = createTaskDto
//         let id = uuid();
//         const task: Task = {
//             title: title,
//             description: description,
//             dueDate: dueDate,
//             id: id,
//             status: taskStatus.OPEN
//         }
//         this.tasks.push(task);
//         return this.tasks.filter(e => e.id === id)
//     }

//     deleteTask(deleteTaskDto: deleteTaskDto): Task[] {
//         const {id} = deleteTaskDto
//         console.log('coming to service', id)
//         this.tasks = this.tasks.filter(e => e.id !== id)
//         return this.tasks
//     }

//     /**
//      * Modify a task by the new values supplied in the request body and only for the field in question
//      */

//     updateTask(updateTaskDto: updateTaskDto, taskId) {
//         const {title, description, status} = updateTaskDto
//         console.log('description', description)

//         // this.tasks.forEach((e, index, tasks) => {
//         //     if (e.id === taskId) {
//         //         //tasks[index][field] = status
//         //         if (typeof title !== "undefined") {
//         //             tasks[index].title = updateTaskDto.title
//         //         }
//         //         if (typeof description != "undefined") {
//         //             console.log('hi')
//         //             tasks[index].description = updateTaskDto.description
//         //         }
//         //         if (typeof status !== "undefined") {
//         //             tasks[index].status = updateTaskDto.status
//         //         }
//         //     }
            
//         // })
//         this.tasks = this.tasks.map(task => {
//             if (task.id === taskId) {
//                 if (typeof updateTaskDto.title !== 'undefined') {
//                     task.title = updateTaskDto.title;
//                 }
//                 if (typeof updateTaskDto.description !== 'undefined') {
//                     task.description = updateTaskDto.description;
//                 }
//                 if (typeof updateTaskDto.status !== 'undefined') {
//                     task.status = updateTaskDto.status;
//                 }
//                 if (typeof updateTaskDto.dueDate !== 'undefined') {
//                     task.dueDate = updateTaskDto.dueDate;
//                 }
//             }
//             return task;
//         });

//         return this.tasks;
//     }
// }


// function modifyObject(object, item, value) {
//     return object[item] = value;
// }