import {ApiService} from "./api.service";
import {Task} from "../models/task.model";
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";

export class TaskService {
    constructor(private apiService: ApiService) {

    }

    getAll(params: any): Observable<{ tasks: Task[] }> {
        return this.apiService
            .get(
                '/tasks',
                new HttpParams({fromObject: params})
            );
    }
}