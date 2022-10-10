import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor() {}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'X-RapidAPI-Key': 'b05272ad99mshf34d3b8f79d90b1p1f69bejsn97755eb4f165',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key: 'b91fd40f1a8f4e1d9e84efb928621f57'
            }
        });
        return next.handle(req);
    }
}