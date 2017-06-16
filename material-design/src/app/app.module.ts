import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/header";
import {LayoutComponent} from "./components/layout";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import {DeployPageComponent} from "./containers/deploy-page";
import {LoginPageComponent} from "./containers/login-page";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "./guards/auth";
import {AnonymousGuard} from "./guards/anonymous";
import {routes} from "./routes";

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent,
        DeployPageComponent,
        LoginPageComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FlexLayoutModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers: [AuthGuard, AnonymousGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
