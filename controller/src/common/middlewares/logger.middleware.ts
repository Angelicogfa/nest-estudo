import { NestMiddleware, MiddlewareFunction, Injectable } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

    resolve(...args: any[]): MiddlewareFunction | Promise<MiddlewareFunction> {
        return (req: Request, resp: Response, next: Function) => {
            console.log('request logada');
            next();
            console.log('Response logada');
        };
    }

}