/**
 * create by fky
 * create on 12/11/2018
 */

import {Component} from "@angular/core";
import {ArticleService} from "../article.service";
import {TranslateService} from "@ngx-translate/core";
import {e} from "@angular/core/src/render3";

@Component({
    selector: 'ngx-article-type-manage',
    templateUrl: './type.manage.component.html',
    styleUrls: ['./type.manage.component.scss']
})

export class TypeManageComponent {
    rows = [];

    editing = {};

    editRowIndex:number = -1;

    isEditModel(index):boolean{
        return index === this.editRowIndex;

    }


    constructor(private articleService: ArticleService, private translateService:TranslateService) {
        this.articleService.getArticleTypes().subscribe(res => {
            this.rows = res;
        })
    }

    rowedit(index,row){
        this.editRowIndex = index;
    }

    confirmModifiy(index,row){
        this.editRowIndex = -1;
    }

    updateValue(event, rowIndex, row ){
        console.log(event.target.value);
        console.log(event,rowIndex,row);
    }
}