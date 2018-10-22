import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-http-bearer";
import { ExtractJwt } from "passport-jwt";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { UnauthorizedException, Injectable } from "@nestjs/common";
import { SecurityService } from "../services/security.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {

    constructor(private readonly securityService: SecurityService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secretKey'
        });
    }

    async validate(payload: JwtPayload): Promise<any> {
        const user = await this.securityService.validatePayload(payload);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}