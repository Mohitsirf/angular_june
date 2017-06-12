import {Component, Inject, OnInit} from '@angular/core';
import {Logger} from "./logger";
import {ActivatedRoute} from "@angular/router";
import {VideoFetchHandler} from "./VideoFetchHandler";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Component({
    selector: 'ck-first-page',
    template: `
        <div class="full-page" fxLayout="row" fxLayoutAlign="center center">
            <md-card fxFlex="600px" fxFlex.xs="500">
                <h1 fxShow fxHide.sm="true">Sign in</h1>
                <form novalidate fxLayout="column" fxLayoutGap="50px">

                    <md-input-container>
                        <input mdInput placeholder="Email">
                        <md-hint>email used during signing up</md-hint>
                    </md-input-container>

                    <md-input-container>
                        <input mdInput placeholder="Password">
                    </md-input-container>

                    <button md-raised-button color="accent" fxFlexAlign="end">Login</button>
                </form>
            </md-card>
        </div>
    `,
    styles: [`
        .full-page {
            position: absolute;
            width: 100%;
            height: 100%;
            background: #ff0000;
        }
    `]
})
export class FirstPageComponent implements OnInit, VideoFetchHandler {
    handleFetchVideo(videos: any[]) {
        console.log();
    }


    constructor(private logger: Logger, private activatedRoute: ActivatedRoute) {


    }

    ngOnInit(): void {
        this.logger.log('first component initialised');

        this.logger.log(this.activatedRoute.snapshot.queryParams['mykey']);

        this.logger.log(this.activatedRoute.snapshot.params['cid']);


        const intOb: Observable<number> = Observable.of(10, 20, 30, 40);
        const stringOb: Observable<string> = Observable.of('hello', 'world', 'sdf', 'dfd');

        intOb.map(x => x * x).subscribe(x => console.log('value fired is ' + x));
        stringOb.subscribe(x => console.log('value from stiring observable is ' + x));


    }


}
