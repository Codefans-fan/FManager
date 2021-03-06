import {NgModule} from '@angular/core';


import {LoginComponent} from './login/login.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {TranslateModule} from '@ngx-translate/core';
import {RegisterComponent} from './register/register.component';
import { RouterModule } from '@angular/router';
import {AuthenticationService} from "./service/authentication.service";
import {ProfileComponent} from './profile/profile.component';
import {UserService} from "./service/user.service";
import {AuthGuardService} from "../service/authguard.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path:'register',
                component:RegisterComponent
            },
            {
                path:'profile',
                canActivate:[AuthGuardService],
                component:ProfileComponent
            }
        ]),
        TranslateModule.forChild()
    ],
    declarations: [LoginComponent,RegisterComponent,ProfileComponent],
    providers:[
        AuthenticationService,
        UserService
    ]
})

export class ComponentModules {

}