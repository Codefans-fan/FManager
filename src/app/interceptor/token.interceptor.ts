/**
 * create by fky
 * create on 12/5/2018
 */
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AuthService} from "../service/auth.service";
import {tap} from "rxjs/operators";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public auth: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        req = (req as HttpRequest<any>).clone({
            setHeaders: {
                'Content-Type': 'application/json',
            }
        });

        if (req.url.indexOf('/user/login') === -1 && req.url.indexOf('/user/register') === -1) {
            req = (req as HttpRequest<any>).clone({
                setHeaders: {
                    Authorization: this.auth.getToken() ? this.auth.getToken() : ''
                }
            });
        }
        return next.handle(req).pipe((tap(event => {
            if (event instanceof HttpResponse) {
                console.log(event);
                if (event.url.indexOf('/auth/login') !== -1 && event.ok) {
                    const resp = JSON.parse(event.body);
                    console.log(resp);
                    this.auth.setToken(resp.token);
                }
            }
        }, error => {
            console.error('Error', error);
        })));

    }


}