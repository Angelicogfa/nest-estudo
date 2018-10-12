import { ExceptionFilter, Catch, HttpException, ArgumentsHost } from "@nestjs/common";
import { HttpArgumentsHost } from "@nestjs/common/interfaces";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    
    catch(exception: HttpException, host: ArgumentsHost) {
       
        const ctx: HttpArgumentsHost = host.switchToHttp();
        const req: Request = ctx.getRequest();
        const resp = ctx.getResponse();
        const status = exception.getStatus();

        resp.status(status)
        .json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: req.url,
            message: exception.message.message
        });
    }

}