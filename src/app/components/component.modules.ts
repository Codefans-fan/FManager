import { NgModule } from '@angular/core';


import { LoginComponent } from './login/login.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule.forChild(),
        RouterModule.forChild([
            {
                path: '',
                component: LoginComponent
            }
        ])
    ],
    declarations: [LoginComponent]

})

export class ComponentModules{

}