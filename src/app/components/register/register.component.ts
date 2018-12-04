/**
 * create by fky
 * create on 12/4/2018
 */

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    templateUrl: './register.component.html',
    selector:'ngx-register',
    styleUrls:['./register.component.scss'],
    changeDetection:ChangeDetectionStrategy.OnPush
})

export  class RegisterComponent implements OnInit{

    user: any = {};

    ngOnInit(): void {
    }


    register(): void {

    }
}