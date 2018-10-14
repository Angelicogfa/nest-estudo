import { NestInterceptor, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export class ExcludeNullInterceptor implements NestInterceptor<any, any>{
   
    intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {
        
        return call$.pipe(map(value => value === null ? '' : value));
    }

}