import {
    MdButtonModule, MdCardModule, MdCheckboxModule, MdIconModule, MdInputModule, MdMenuModule,
    MdProgressSpinnerModule, MdSnackBarModule,
    MdToolbarModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        MdInputModule,
        MdToolbarModule,
        MdButtonModule,
        MdCheckboxModule,
        MdIconModule,
        MdMenuModule,
        MdCardModule,
        MdProgressSpinnerModule,
        MdSnackBarModule
    ],
    exports: [
        MdInputModule,
        MdToolbarModule,
        MdButtonModule,
        MdCheckboxModule,
        MdIconModule,
        MdMenuModule,
        MdCardModule,
        MdProgressSpinnerModule,
        MdSnackBarModule
    ],
})
export class MaterialModule {
}