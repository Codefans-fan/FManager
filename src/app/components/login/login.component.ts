import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";
import {first} from "rxjs/operators";
import { Router } from '@angular/router';
import {LoadingController} from "@ionic/angular";
@Component(
    {
        templateUrl: './login.component.html',
        selector:'ngx-login',
        styleUrls:['./login.component.scss'],
        changeDetection:ChangeDetectionStrategy.OnPush
    })

export class LoginComponent implements OnInit {

    user: any = {};
    rememberMe = false;
    constructor(private authenticationService:AuthenticationService,private router: Router,private loadingController:LoadingController){}

    ngOnInit(): void {
    }

    async login() {
        const loader = await this.loadingController.create({
            duration: 3000
        });
        await loader.present();
        this.authenticationService.login(this.user.email, this.user.password).pipe(first()).subscribe(data => {
            loader.dismiss();
            this.router.navigate(['/home'])
        }, error => {
            loader.dismiss();
            console.error(error);
        });
    }



}