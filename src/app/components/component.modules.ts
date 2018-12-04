import {NgModule} from '@angular/core';


import {LoginComponent} from './login/login.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";
import {TranslateModule} from '@ngx-translate/core';
import {RegisterComponent} from './register/register.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule.forChild(),
        RouterModule.forChild([
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path:'register',
                component:RegisterComponent
            }
        ])
    ],
    declarations: [LoginComponent,RegisterComponent]

})

export class ComponentModules {

}