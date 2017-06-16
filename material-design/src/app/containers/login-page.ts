import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-login-page',
    template: `
        <md-card>
            <form [formGroup]="loginForm" (ngSubmit)="loginForm.valid && login()">
                <md-input-container>
                    <input mdInput placeholder="Enter email" formControlName="email">
                    <md-error>email has to be valid</md-error>
                </md-input-container>
                <md-input-container>
                    <input mdInput placeholder="Enter password" formControlName="pswd">
                    <md-error>password is required</md-error>
                </md-input-container>
                <button md-raised-button>Login</button>
            </form>
            <span class="error">{{error}}</span>
        </md-card>
    `,
    styles: [`
        .error {
            color: red;
        }
    `]
})
export class LoginPageComponent implements OnInit {
    loginForm: FormGroup;
    error: String = ''

    constructor(private http: Http, private router:Router) {
        this.loginForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            pswd: new FormControl(null, [Validators.required])
        });
    }

    ngOnInit(): void {

    }

    login() {
        const email = this.loginForm.get('email').value
        const password = this.loginForm.get('pswd').value

        this.http
            .get(environment.apiBaseUrl + '/auth/login?email=' + email + '&password=' + password)
            .subscribe(
                response => {

                    const json = response.json()
                    localStorage.setItem('my_login_token', json.token)
                    this.router.navigate(['/home']);

                },
                error => {
                    this.error = 'login credentials are invalid'
                },
            )

        console.log('hello world!')
    }


}


// user has not touched the field touched and untouched
// user has touched but not changed the value prestine and dirty
// valid and invalid
