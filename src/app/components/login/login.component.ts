import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component(
    {
        templateUrl: './login.component.html',
        selector:'ngx-login',
        styleUrls:['./login.component.scss'],
        changeDetection:ChangeDetectionStrategy.OnPush
    })

export class LoginComponent implements OnInit {

    redirectDelay: number = 0;
    showMessages: any = {};
    strategy: string = '';

    errors: string[] = [];
    messages: string[] = [];
    user: any = {};
    submitted: boolean = false;


    rememberMe = false;

    ngOnInit(): void {
    }


    login(): void {
        this.errors = [];
        this.messages = [];
        this.submitted = true;


    }



}