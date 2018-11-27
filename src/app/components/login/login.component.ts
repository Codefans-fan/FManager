import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component(
    {
        templateUrl: './login.component.html',
        selector:'ngx-login',
        styleUrls:['./login.component.scss'],
        changeDetection:ChangeDetectionStrategy.OnPush
    })

export class LoginComponent implements OnInit {


    ngOnInit(): void {
    }



}