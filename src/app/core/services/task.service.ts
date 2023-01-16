import {ApiService} from "./api.service";
import {Task} from "../models/task.model";
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    TASK_PATH = '/tasks/';

    constructor(private apiService: ApiService) {

    }

    getAll(params: any): Observable<{ tasks: Task[], totalItems: number }> {
        return this.apiService.get(
            this.TASK_PATH,
            new HttpParams({fromObject: params}))
            .pipe(map(data => {
                    return {tasks: data.data, totalItems: data.meta.total}
                }
            ));
    }

    get(id): Observable<Task> {
        return this.apiService.get(this.TASK_PATH + id)
            .pipe(map(data => data));
    }

    save(task): Observable<Task> {
        const taskToSave = {
            title: task.title,
            description: task.description,
            due_date: task.due_date,
            members: task.users?.map(user => user.id),
            sub_tasks: task.sub_tasks?.map(task => task.description),
            categories: task.categories?.map(category => category.id)
        }
        // If we're updating an existing task
        if (task.id) {
            return this.apiService.put(this.TASK_PATH + task.id, taskToSave)
                .pipe(map(data => data));

            // Otherwise, create a new task
        } else {
            return this.apiService.post(this.TASK_PATH, taskToSave)
                .pipe(map(data => data));
        }
    }


}