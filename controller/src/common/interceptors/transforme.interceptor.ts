import { NestInterceptor, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class TransformeInterceptor implements NestInterceptor {
    
    intercept(context: ExecutionContext,
        call$: Observable<any>): Observable<any> {
        return call$.pipe(map(data => ({ data })));
    }
}