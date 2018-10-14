import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from 'rxjs';
import { Reflector } from "@nestjs/core";

@Injectable()
export class RolesGuard implements CanActivate {

    constructor(private reflector: Reflector) {

    }

    canActivate(context: ExecutionContext): boolean {

        var roles: string[] = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles)
            return true;

        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const hasRole = () => user.roles.some((role) => roles.find(item => item === role) != null);
        return user && user.roles && hasRole();
    }

}