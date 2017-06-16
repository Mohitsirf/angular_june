import {Routes} from "@angular/router";
import {LoginPageComponent} from "./containers/login-page";
import {DeployPageComponent} from "./containers/deploy-page";
import {AuthGuard} from "./guards/auth";
import {AnonymousGuard} from "./guards/anonymous";

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent, canActivate: [AnonymousGuard]},
    {path: 'home', component: DeployPageComponent, canActivate: [AuthGuard]}
];