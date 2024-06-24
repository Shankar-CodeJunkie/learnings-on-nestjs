import { taskStatus } from "./task.dto";
import { IsEnum, IsString, IsOptional} from "class-validator";

export class updateTaskDto {   
    title?: string;

    description?: string

    id: string;

    dueDate?: string;

    @IsEnum(taskStatus) @IsOptional()
    status?: taskStatus;
}