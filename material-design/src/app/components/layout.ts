import {Component} from '@angular/core';

@Component({
    selector: 'app-layout',
    template: `
        <app-header></app-header>
        <ng-content></ng-content>
        <div>footer when ready will display here</div>
    `,
    styles: []
})
export class LayoutComponent {

}
