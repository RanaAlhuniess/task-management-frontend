import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskDetailComponent} from "./task-detail/task-detail.component";
import {TaskResolver} from "./task-resolver.service";
import {TaskEditComponent} from "./task-edit/task-edit.component";

const routes: Routes = [
  {
    path: 'task/:id',
    component: TaskDetailComponent,
    resolve: {
      task: TaskResolver
    }
  },{
    path: 'task/:id/edit',
    component: TaskEditComponent,
    resolve: {
      task: TaskResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {}
