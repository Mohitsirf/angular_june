import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <div id="container" fxLayoutAlign="space-between center">
            <img src="/assets/images/logo.png">
            <div fxLayout="column" fxLayoutAlign="space-around center" fxFlexAlign="stretch">
                <span>doTerra business opportunity</span>
                <div fxLayoutAlign="center center" fxLayoutGap="10px">
                    <span>Manage videos</span>
                    <md-icon>keyboard_arrow_right</md-icon>
                    <span>Edit Ctas</span>
                    <md-icon>keyboard_arrow_right</md-icon>
                    <span>Deploy</span>
                    <md-icon>keyboard_arrow_right</md-icon>
                    <span>Stats</span>
                </div>
            </div>
            <div fxLayoutAlign="space-between center">
                <md-icon>close</md-icon>
                <span>close</span>
            </div>
        </div>
    `,
    styles: [`
        #container {
            display: flex;
            background: #aaaaaa;
            flex-direction: row;
        }
    `]
})
export class HeaderComponent {

}
