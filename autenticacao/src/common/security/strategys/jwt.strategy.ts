import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-http-bearer";
import { ExtractJwt } from "passport-jwt";
import { UnauthorizedException, Injectable } from "@nestjs/common";
import { SecurityService } from "../services/security.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {

    constructor(private readonly securityService: SecurityService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }

    async validate(token: string): Promise<any> {
        const user = await this.securityService.validatePayload(token);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}