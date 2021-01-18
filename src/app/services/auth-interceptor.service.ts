import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedReq = req.clone({
                                  params: req.params.append('key','84e6e2f3687042dfae9174458210601')
                                   .append('format', 'json')
                                   })
    return next.handle(modifiedReq);
  }
}