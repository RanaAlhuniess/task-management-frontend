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
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { TaskDetailComponent } from './task-detail/task-detail.component';
import {TaskRoutingModule} from "./task-routing.module";
import {MatTabsModule} from "@angular/material/tabs";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { TaskEditComponent } from './task-edit/task-edit.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
    imports: [
        SharedModule,
        MatCardModule,
        NgxPaginationModule,
        MatListModule,
        MatChipsModule,
        MatInputModule,
        MatTooltipModule,
        MatProgressBarModule,
        TaskRoutingModule,
        MatTabsModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    declarations: [
        TaskListComponent,
        TaskComponent,
        TaskCategoryLabelComponent,
        TaskDetailComponent,
        TaskEditComponent
    ],
    providers: [],
    exports: [
        TaskListComponent
    ]
})
export class TaskModule {
}
