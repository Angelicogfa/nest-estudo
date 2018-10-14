import { NestInterceptor, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export class TransformeInterceptor implements NestInterceptor {
    
    intercept(context: ExecutionContext,
        call$: Observable<any>): Observable<any> {
        return call$.pipe(map(data => ({ data })));
    }
}