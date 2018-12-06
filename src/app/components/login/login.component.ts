import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";
import {first} from "rxjs/operators";
import { Router } from '@angular/router';
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
    constructor(private authenticationService:AuthenticationService,private router: Router,){}

    ngOnInit(): void {
    }

    login(): void {
        this.loading = true;
        this.authenticationService.login(this.user.username, this.user.password).pipe(first()).subscribe(data => {
            this.router.navigate(['/home'])
        }, error => {
            console.error(error);
        });
        this.loading = false;
    }



}