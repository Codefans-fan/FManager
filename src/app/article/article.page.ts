/**
 * create by fky
 * create on 12/10/2018
 */
import {Component} from "@angular/core";
import {Nav, NavController} from "@ionic/angular";
import {TypeManageComponent} from "./type/type.manage.component";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector:'ngx-article',
    templateUrl:'./article.page.html',
    styleUrls:['./article.page.scss']
})

export class ArticlePage {

    constructor(private navController: NavController){}


    onItemClick(type:string){
        console.log(type);
        if('type_manage' === type){
           this.navController.navigateForward('/article/manage');
        }

    }

}