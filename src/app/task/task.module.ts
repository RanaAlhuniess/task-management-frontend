import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {TaskListComponent} from "./task-list/task-list.component";
import { TaskComponent } from './task/task.component';
import {MatCardModule} from "@angular/material/card";
import {NgxPaginationModule} from "ngx-pagination";
import {MatListModule} from "@angular/material/list";
import { TaskCategoryLabelComponent } from './task-category-label/task-category-label.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
    imports: [
        SharedModule,
        MatCardModule,
        NgxPaginationModule,
        MatListModule,
        MatChipsModule,
        MatInputModule,
        MatTooltipModule
    ],
    declarations: [
        TaskListComponent,
        TaskComponent,
        TaskCategoryLabelComponent
    ],
    providers: [],
    exports: [
        TaskListComponent
    ]
})
export class TaskModule {
}
