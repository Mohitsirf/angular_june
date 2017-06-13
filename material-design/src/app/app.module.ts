import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/header";
import {LayoutComponent} from "./components/layout";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import {DeployPageComponent} from "./containers/deploy-page";

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent,
        DeployPageComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FlexLayoutModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
