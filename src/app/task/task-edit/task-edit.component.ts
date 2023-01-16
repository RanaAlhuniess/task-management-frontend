import {ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import {Task} from "../../core/models/task.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable, startWith} from "rxjs";
import {Category} from "../../core/models/category.model";
import {User} from "../../core/models/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../../core/services/task.service";
import {CategoryService} from "../../core/services/category.service";
import {UserService} from "../../core/services/user.service";
import {map} from "rxjs/operators";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
    styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent {
    task!: Partial<Task>;

    categoryCtrl = new FormControl('');
    filteredCategories: Observable<Category[]> = new Observable<Category[]>();
    allCategories: Category[] = [];
    @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement> | undefined;

    userCtrl = new FormControl('');
    filteredUsers: Observable<User[]> = new Observable<User[]>();
    allUsers: User[] = [];
    @ViewChild('userInput') userInput: ElementRef<HTMLInputElement> | undefined;
    taskForm!: FormGroup;

    constructor(private route: ActivatedRoute,
                private taskService: TaskService,
                private categoryService: CategoryService,
                private userService: UserService,
                private router: Router,
                private fb: FormBuilder,
                private cd: ChangeDetectorRef) {
        this.filteredCategories = this.categoryCtrl.valueChanges.pipe(startWith(null), map((category: string | null) => (category ? this._filterCategories(category) : this.allCategories.slice())),);
        this.filteredUsers = this.userCtrl.valueChanges.pipe(startWith(null), map((user: string | null) => (user ? this._filterUsers(user) : this.allUsers.slice())),);
    }

    ngOnInit() {
        // Retreive the prefetched task
        this.route.data.subscribe((data) => {
            const {task} = data;
            this.task = task?task: {categories:[], users:[]};
            this.initForm();
            console.log(this.task);

            this.cd.markForCheck();
        });
        this.categoryService.getAll().subscribe({
            next: response => {
                this.allCategories = response;
                this.cd.markForCheck();
            },
            error: error => {
                console.log(error);
            }
        });
        this.userService.getAll().subscribe({
            next: response => {
                this.allUsers = response;
                this.cd.markForCheck();
            },
            error: error => {
                console.log(error);
            }
        });
    }

    categorySelected($event: MatAutocompleteSelectedEvent) {
        const category = this.allCategories.find(c => c.name === $event.option.viewValue);
        if (!category) return;
        this.task?.categories?.push(category);
        if (this.categoryInput) this.categoryInput.nativeElement.value = '';
        this.categoryCtrl.setValue(null);
    }

    categoryRemoved(category: Category) {
        const index = this.task.categories?.indexOf(category);

        if (index!=undefined && index >= 0) {
            this.task.categories?.splice(index, 1);
        }
    }

    userSelected($event: MatAutocompleteSelectedEvent) {
        const user = this.allUsers.find(c => c.name === $event.option.viewValue);
        if (!user) return;
        this.task.users?.push(user);
        if (this.userInput) this.userInput.nativeElement.value = '';
        this.userCtrl.setValue(null);
    }

    userRemoved(user: User) {
        const index = this.task.users?.indexOf(user);

        if (index!=undefined && index >= 0) {
            this.task.users?.splice(index, 1);
        }
    }

    getDate(due_date: string) {
        return new Date(due_date);
    }

    submitForm() {
        this.updateTask(this.taskForm.value);
        // post the changes
        this.taskService.save(this.task)
            .subscribe({
                next: task => {
                    this.router.navigateByUrl('/task/' + task.id);
                    this.cd.markForCheck();
                },
                error: err => {
                    this.cd.markForCheck();
                }
            });
    }

    private _filterCategories(category: string) {
        const filterValue = category.toLowerCase();

        return this.allCategories.filter(category => category.name.toLowerCase().includes(filterValue));
    }

    private _filterUsers(user: string) {
        const filterValue = user.toLowerCase();

        return this.allUsers.filter(user => user.name.toLowerCase().includes(filterValue));
    }

    private initForm() {
        this.taskForm = new FormGroup({
            id: new FormControl(this.task ? this.task.id : null),
            title: new FormControl(this.task ? this.task.title : '', Validators.required),
            description: new FormControl(this.task ? this.task.description : '', Validators.required),
            due_date: new FormControl(this.task ? this.task.due_date : null, Validators.required),
        });
    }

    private updateTask(value: Object) {
        Object.assign(this.task, value);
    }
}
