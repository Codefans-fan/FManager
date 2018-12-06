import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";
import {first} from "rxjs/operators";

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
    loading:boolean = false;
    constructor(private authenticationService:AuthenticationService){}

    ngOnInit(): void {
    }

    login(): void {
        this.loading = true;
        this.authenticationService.login(this.user.username, this.user.password).pipe(first()).subscribe(data => {
            console.log(data);
        }, error => {
            console.error(error);
        });
        this.loading = false;
    }



}