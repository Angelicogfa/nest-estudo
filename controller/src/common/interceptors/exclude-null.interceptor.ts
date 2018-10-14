import { NestInterceptor, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ExcludeNullInterceptor implements NestInterceptor<any, any>{
   
    intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {
        
        return call$.pipe(map(value => value === null ? '' : value));
    }

}