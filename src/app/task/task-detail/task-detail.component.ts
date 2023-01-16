import {ChangeDetectorRef, Component} from '@angular/core';
import {Task} from "../../core/models/task.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {
    task!: Task;

    constructor(private route: ActivatedRoute,
                private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        // Retreive the prefetched task
        this.route.data.subscribe((data) => {
            const {task} = data;
            this.task = task;
            console.log(task);
            this.cd.markForCheck();
        });
    }

}
