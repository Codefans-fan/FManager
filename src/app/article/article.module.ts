/**
 * create by fky
 * create on 12/10/2018
 */

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ArticlePage} from "./article.page";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import { TranslateModule} from '@ngx-translate/core';
import {TypeManageComponent} from './type/type.manage.component'
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ArticleService} from "./article.service";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule,
        NgxDatatableModule,
        RouterModule.forChild([
            {
                path: '',
                component: ArticlePage
            },
            {
                path:'manage',
                component:TypeManageComponent
            }
        ])
    ],
    declarations: [ArticlePage,TypeManageComponent],
    providers:[ArticleService]

})
export class ArticleModule {}