import { NestInterceptor, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export class ErrorInterceptor implements NestInterceptor<any, any> {

    intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {
        return call$.pipe(catchError(err => throwError(new HttpException('Erro', HttpStatus.BAD_REQUEST))));
    }

}