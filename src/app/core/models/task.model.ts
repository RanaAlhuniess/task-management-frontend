import {Category} from "./category.model";
import {User} from "./user.model";
import {Subtask} from "./subtask.model";

export interface Task {
    id: number;
    title: string;
    description: string;
    created_at: string;
    due_date: string;
    categories: Category[];
    users: User[];
    sub_tasks: Subtask[];
}