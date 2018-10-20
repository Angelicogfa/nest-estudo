import { Strategy } from "passport-http-bearer";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import { UnauthorizedException, Injectable } from "@nestjs/common";


@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {

    constructor(readonly authService: AuthService) {
        super();
    }

    async validate(token: string) {
        
        const user = this.authService.validateUser(token);
        if(!user)
            throw new UnauthorizedException();
        
        return user;
    }

}