import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FirstPageComponent} from './first-page.component';
import {SecondPageComponent} from './second-page.component';
import {RouterModule} from "@angular/router";
import {abc} from "./routes";
import {Logger} from "./logger";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";


const mySingleLogger = new Logger();

@NgModule({
    declarations: [
        AppComponent,
        FirstPageComponent,
        SecondPageComponent
    ],
    imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        BrowserModule,
        RouterModule.forRoot(abc),
        MaterialModule
    ],
    providers: [Logger],
    bootstrap: [AppComponent]
})
export class AppModule {
}
