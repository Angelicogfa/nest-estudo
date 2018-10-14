import { NestMiddleware, MiddlewareFunction, Injectable } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

    resolve(...args: any[]): MiddlewareFunction | Promise<MiddlewareFunction> {
        return (req: Request, resp: Response, next: Function) => {
            console.log('middleware log - request logada');
            next();
            console.log('middleware log - Response logada');
        };
    }

}