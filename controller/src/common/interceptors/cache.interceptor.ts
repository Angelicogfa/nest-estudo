import { NestInterceptor, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable, of } from "rxjs";

@Injectable()
export class CacheInterceptor implements NestInterceptor {
    
    intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {
        const isCached = true;
        if (isCached) {
            return of([]);
        }
        return call$;

    }

}