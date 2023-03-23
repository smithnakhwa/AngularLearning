// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
// import { WipiService } from "./wipi.service";

// @Injectable()
// export class AuthIntterceptorService implements HttpInterceptor{
 
//     constructor(private wipi:WipiService){}
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//          console.log('base request',req);
//         //  //we can set our headers
//         //  const modifedReq=req.clone({
//         //     params:req.params.set('srsearch',this.wipi.search)
//         //  });

     
//      return next.handle(req);
       
//     }

// }