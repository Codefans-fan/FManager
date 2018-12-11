import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardService} from "./service/authguard.service";
const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path:'article',
        canActivate:[AuthGuardService],
        loadChildren:'./article/article.module#ArticleModule'

    },
    {
        path: 'auth',
        loadChildren:'./components/component.modules#ComponentModules'
    },
    {
        path: 'list',
        loadChildren: './list/list.module#ListPageModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
