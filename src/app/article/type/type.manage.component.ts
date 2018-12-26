/**
 * create by fky
 * create on 12/11/2018
 */

import {Component} from "@angular/core";
import {ArticleService} from "../article.service";
import {TranslateService} from "@ngx-translate/core";
import {e} from "@angular/core/src/render3";
import {ArticleTypeModel} from "./article.type.model";
import {ToastController} from "@ionic/angular";

@Component({
    selector: 'ngx-article-type-manage',
    templateUrl: './type.manage.component.html',
    styleUrls: ['./type.manage.component.scss']
})

export class TypeManageComponent {
    rows:Array<ArticleTypeModel> = [];

    editedIds:Set<number> = new Set<number>();

    editRowIndex:number = -1;

    isEditModel(index):boolean{
        return index === this.editRowIndex;

    }


    constructor(private articleService: ArticleService, private translateService:TranslateService,  private toastController:ToastController) {
        this.articleService.getArticleTypes().subscribe((res:Array<ArticleTypeModel>) => {
            this.rows = res;
        })
    }

    rowedit(index,row){
        this.editRowIndex = index;
    }

    confirmModifiy(){
        this.editRowIndex = -1;
        const editedRows = this.rows.filter(item => this.editedIds.has(item.id));
        this.articleService.updateArticleTypes(editedRows).subscribe(res =>{
            this.editedIds.clear();
            this.translateService.get('article.message.success').subscribe(msg =>{
                this.showSuccessToast(msg);
            });
        },error1 => {
            this.translateService.get('article.message.failed').subscribe(msg =>{
                this.failedToast(msg);
            });
        });
    }

    updateValue(event, rowIndex, column){
        this.rows[rowIndex][column] = event.target.value;
        this.editedIds.add(this.rows[rowIndex]['id']);
    }

    private async showSuccessToast(msg:string){
        const toast = await this.toastController.create({
            color:'success',
            position:'top',
            message: msg,
            duration:2000
        });
        toast.present();
    }

    private async failedToast(message){
        const toast = await this.toastController.create({
            color:'danger',
            position:'top',
            message: message,
            duration:2000
        });
        toast.present();
    }
}