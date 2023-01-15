import {Category} from "./category.model";

export interface Task {
    title: string;
    description: string;
    subTaskList: string[];
    createdAt: string;
    updatedAt: string;
    dueDate: string;
    subTaskCount: number;
    Categories: Category[];
}