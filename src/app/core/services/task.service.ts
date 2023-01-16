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
    constructor(private apiService: ApiService) {

    }

    getAll(params: any): Observable<{ tasks: Task[], totalItems: number }> {
        return this.apiService.get(
            '/tasks',
            new HttpParams({fromObject: params}))
            .pipe(map(data => {
                    return {tasks: data.data, totalItems: data.meta.total}
                }
            ));
    }

    get(id): Observable<Task> {
        return this.apiService.get('/tasks/' + id)
            .pipe(map(data => data));
    }


}