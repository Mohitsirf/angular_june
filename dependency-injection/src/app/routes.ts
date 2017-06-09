import {FirstPageComponent} from "./first-page.component";
import {SecondPageComponent} from "./second-page.component";
import {Route, Routes} from "@angular/router";
/**
 * Created by cerebro on 07/06/17.
 */


export const abc: Routes = [
    {path: '', component: FirstPageComponent},
    {path: 'second', component: SecondPageComponent}
];
