import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': '2383eaa478msh50e70d39e4bc59ap122baejsn5849078bccc2',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams: {
                key: 'a6586cd3d12f4119b4a72f8e3473bb49'
            }
        });
        return next.handle(req);
    }
}