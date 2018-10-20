import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-http-bearer";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "auth/services/auth.service";


@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly authService: AuthService) {
        super();
    }

    async validate(token: string) {
        const user = this.authService.validateUser(token);
        if (!user)
            throw new UnauthorizedException();

        return user;
    }
}