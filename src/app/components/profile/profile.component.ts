/**
 * create by fky
 * create on 12/8/2018
 */
import {Component} from "@angular/core";
import {AuthService} from "../../service/auth.service";

@Component({
    templateUrl:'./profile.component.html'
})


export  class ProfileComponent {

     username:string = '';

    constructor(private authService:AuthService){

        this.authService.currentUser.subscribe(res =>{
           this.username = res;
        });
    }
}