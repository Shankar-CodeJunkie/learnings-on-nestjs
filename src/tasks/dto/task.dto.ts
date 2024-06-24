//import { taskStatus } from "../task.model";
export class Task {
    title: string;
    description: string;
    dueDate: string;
    id: string;
    status: taskStatus
}

export enum taskStatus {
    OPEN =  "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    CLOSED = "CLOSED",
    BACKLOG = "BACKLOG"
}