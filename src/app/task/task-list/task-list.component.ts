import {ChangeDetectorRef, Component} from '@angular/core';
import {TaskService} from "../../core/services/task.service";
import {Task} from "../../core/models/task.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
    tasks: Task[] = [];

    page = 1;
    totalItems = 0;
    pageSize = 15;

    loading = false;
    title = '';

    constructor(private taskService: TaskService,private cd: ChangeDetectorRef, private router: Router) {
    }

    ngOnInit(): void {
        this.retrieveTasks();
    }

    trackByFn(index, item) {
        return index;
    }

    handlePageChange(event: number) {
        this.page = event;
        this.retrieveTasks();
    }
    getRequestParams(searchTitle: string, page: number): any {
        let params: any = {};

        if (searchTitle) {
            params[`search`] = searchTitle;
        }

        if (page) {
            params[`page`] = page;
        }

        return params;
    }
    retrieveTasks(): void {
        const params = this.getRequestParams(this.title, this.page);
        this.taskService.getAll(params)
            .subscribe({
                next: response => {
                    const { tasks, totalItems } = response;
                    this.tasks = tasks;
                    this.totalItems = totalItems;
                    this.loading = true
                    this.cd.markForCheck();
                },
                error: error => {
                    console.log(error);
                }
            });
    }

    search(value: string) {
        this.title = value;
        this.page = 1;
        this.retrieveTasks();
    }
}
