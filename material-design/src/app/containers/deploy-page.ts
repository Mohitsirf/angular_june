import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-deploy-page',
    template: `
        <app-layout>
            <button md-raised-button (click)="logout()">logout</button>
            <div fxLayout="column">
                <md-tab-group>
                    <md-tab label="New Deployment">
                        <div fxLayout="column" fxLayoutAlign="start center">
                            <span>video dropdown will go here</span>
                            <span>Choose from below options....:</span>
                            <span>deployment options list will go here</span>
                        </div>
                    </md-tab>
                    <md-tab label="Scheduled Deployments">
                        Content 2
                    </md-tab>
                </md-tab-group>
            </div>
        </app-layout>
    `,
    styles: []
})
export class DeployPageComponent {


    constructor(private router: Router) {
    }

    logout() {
        localStorage.removeItem('my_login_token');

        this.router.navigate(['login']);
    }

}
