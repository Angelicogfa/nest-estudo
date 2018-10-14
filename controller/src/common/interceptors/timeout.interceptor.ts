import { NestInterceptor, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { timeout } from "rxjs/operators";

export class TimeoutInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {
        return call$.pipe(timeout(5000));
    }

}