export interface Task {
    title: string;
    id: string;
    description: string;
    dueDate: string;
    status: taskStatus;
}

export enum taskStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE"
}