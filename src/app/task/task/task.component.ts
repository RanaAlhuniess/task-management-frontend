import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Task} from "../../core/models/task.model";
import {createObject} from "rxjs/internal/util/createObject";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {
  @Input() task!: Task;
}
