import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-http-bearer";
import { SecurityService } from "../services/security.service";
import { ExtractJwt } from "passport-jwt";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { UnauthorizedException } from "@nestjs/common";

export class JwtStrategy extends PassportStrategy(Strategy) {

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