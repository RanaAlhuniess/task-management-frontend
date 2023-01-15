import {Component, Input} from '@angular/core';
import {Category} from "../../core/models/category.model";

@Component({
  selector: 'app-task-category-label',
  templateUrl: './task-category-label.component.html',
  styleUrls: ['./task-category-label.component.scss']
})
export class TaskCategoryLabelComponent {
  @Input() category!: Category;
}
