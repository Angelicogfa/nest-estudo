import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAutGuard extends AuthGuard('bearer') {

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
