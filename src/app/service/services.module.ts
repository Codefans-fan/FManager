
/**
 * create by fky
 * create on 12/5/2018
 */

import {NgModule} from "@angular/core";
import {AuthService} from "./auth.service";
import {AuthGuardService} from "./authguard.service";

@NgModule({
    providers:[
        AuthService,
        AuthGuardService
    ]
})

export class ServicesModule {

}