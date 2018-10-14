import { NestInterceptor, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    
    async intercept(context: ExecutionContext, call$: Observable<any>): Promise<any>{
        console.log('interception logging - Before execute...');

        const date = Date.now();
        return await call$.pipe(
            tap(()=> {
                console.log(`interception logging - After... ${(Date.now() - date)} ms`);
            }));
        
    }
}