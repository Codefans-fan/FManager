/**
 * create by fky
 * create on 12/4/2018
 */

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";
import {AlertController, LoadingController} from "@ionic/angular";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
    templateUrl: './register.component.html',
    selector:'ngx-register',
    styleUrls:['./register.component.scss'],
    changeDetection:ChangeDetectionStrategy.OnPush
})

export  class RegisterComponent implements OnInit{

    user: any = {};

    constructor(private authenticationService:AuthenticationService, private loadingController:LoadingController, private router:Router,
                private alertController:AlertController,
                private tranlateService:TranslateService
                ){}

    ngOnInit(): void {
    }


    async register() {
        const loader = await this.loadingController.create({
            duration: 3000
        });
        await loader.present();
        this.authenticationService.register(this.user.email,this.user.password,this.user.confirmPassword,this.user.fullName).pipe(first()).subscribe(res => {
            loader.dismiss();
            let jsonString = JSON.stringify(res);
            let json = JSON.parse(jsonString);
            if (json.code === 200) {
                //register succes
                this.router.navigate(['/auth/login']);
                return;
            }

            this.tranlateService.get(`errors.register.${json.code}`).subscribe(async translatedStr => {
                const alert = await this.alertController.create({
                    header: 'Error',
                    message: translatedStr,
                    buttons: ['OK']
                });

                await alert.present();
            });

        }, error=>{
            loader.dismiss();
            console.error(error);
        })
    }
}