import { AuthGuard } from "@nestjs/passport";
import { ExecutionContext, UnauthorizedException, Injectable } from "@nestjs/common";

@Injectable()
export class CustomAuthGuard extends AuthGuard('bearer') {

    canActivate(context: ExecutionContext) {

        return super.canActivate(context);
    }

    handleRequest(err, user, info) {
        
        if(err || !user){
            throw err || new UnauthorizedException('Você não está autorizado à acessar este recurso');
        }

        return user;
    }

}