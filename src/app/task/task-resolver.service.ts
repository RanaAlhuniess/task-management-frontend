import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import {Task} from "../core/models/task.model";
import {TaskService} from "../core/services/task.service";

@Injectable({
  providedIn: 'root'
})
export class TaskResolver implements Resolve<Task> {
  constructor(
    private taskService: TaskService,
    private router: Router,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.taskService.get(route.params['id'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
