import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-http-bearer";
import { PassportStrategy } from "@nestjs/passport";
import { SecurityService } from "../services/security.service";


@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly securityService: SecurityService) {
        super();
    }

    async validate(token: string) {
        const user = this.securityService.validateUser(token);
        if (!user)
            throw new UnauthorizedException();

        return user;
    }
}