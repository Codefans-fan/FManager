/**
 * create by fky
 * create on 12/10/2018
 */
import {Component} from "@angular/core";


@Component({
    selector:'ngx-article',
    templateUrl:'./article.page.html',
    styleUrls:['./article.page.scss']
})

export class ArticlePage {

    onItemClick(){
        alert("xxxx");
    }

}