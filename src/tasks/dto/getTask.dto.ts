export class GetTaskById {
    id: string
}

export class GetTaskBySearch {
    search: string
}

export class GetTaskByFilter {
    status: string
}

export class getRequestObject {
    status?: string;
    description?: string;
}