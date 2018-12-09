/**
 * create by fky
 * create on 12/8/2018
 */
import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../service/auth.service";
import {UserService} from "../service/user.service";
import {first} from "rxjs/operators";
import {UserRoleModel} from "../../models/user/userrole.model";
import {UserModel} from "../../models/user/user.model";

@Component({
    templateUrl:'./profile.component.html',
    selector:'ngx-profile',
    styleUrls:['./profile.component.scss'],
})


export  class ProfileComponent implements OnInit{

    username:string = '';
    isEdit:boolean = false;
    roleOptions:Array<UserRoleModel> = [];

    userRoles :Array<UserRoleModel> = [];

    constructor(private authService:AuthService,private userService:UserService){

        this.authService.currentUser.subscribe(res =>{
           this.username = res;
        });
    }
    ngOnInit(): void {
        this.userService.getUserDetail().pipe(first()).subscribe((res:UserModel) => {
            this.userRoles = res.userRoles;
            console.log(res);
            this.userService.getRoles().pipe(first()).subscribe((res:Array<UserRoleModel>) =>{
                this.roleOptions = res;
            });
        },err =>{
            console.error(err);
        });

    }




}