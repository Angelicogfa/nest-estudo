import { CanActivate, Injectable, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { HttpArgumentsHost } from "@nestjs/common/interfaces";

@Injectable()
export class AuthGuard implements CanActivate {

    async canActivate(context: ExecutionContext): Promise<boolean> {

        const args: HttpArgumentsHost = context.switchToHttp();
        return await this.ValidateRequest(args.getRequest());
    }

    private async ValidateRequest(request: any): Promise<boolean> {
        console.log('Autenticando...');
        request.user = { id: '123', roles:[ 'read', 'write'] };
        return true;
    }
}