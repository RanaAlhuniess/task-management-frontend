import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../core/services/user.service";
import {Errors} from "../core/models/errors.model";

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
    authType: String = '';
    title: String = '';
    errors: Errors = {errors: {}};
    isSubmitting = false;
    authForm: FormGroup;
    error:string= '';
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private fb: FormBuilder,
        private cd: ChangeDetectorRef
    ) {
        // use FormBuilder to create a form group
        this.authForm = this.fb.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required]

        });
    }

    ngOnInit() {
        this.route.url.subscribe(data => {
            // Get the last piece of the URL (it's either 'login' or 'register')
            this.authType = data[data.length - 1].path;
            // Set a title for the page accordingly
            this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
            // add form control for name if this is the register page
            if (this.authType === 'register') {
                this.authForm.addControl('name', new FormControl());
                this.authForm.addControl('password_confirmation', new FormControl());
            }
            this.cd.markForCheck();
        });
    }

    submitForm() {
        this.isSubmitting = true;
        this.errors = {errors: {}};

        const credentials = this.authForm.value;
        this.userService
            .attemptAuth(this.authType, credentials)
            .subscribe({
                    next: _ => {
                        this.router.navigateByUrl('/')
                    },
                    error: err => {
                        this.error =  (this.authType === 'login') ?
                            'The username and password were not recognized' :
                            'Sign up';
                        console.log(err)
                        this.isSubmitting = false;
                        this.cd.markForCheck();
                    }
                }
            );
    }
}
