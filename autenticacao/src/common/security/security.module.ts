import { Module, DynamicModule } from "@nestjs/common";
import { HttpStrategy } from "./strategys/http.strategy";
import { UsersService } from "../../users/services/users.service";
import { UsersModule } from "../../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./strategys/jwt.strategy";
import { SecurityService } from "./services/security.service";

export const PassportStrategyModule: DynamicModule = PassportModule.register({ defaultStrategy: 'bearer' });

export const PassportJwtStrategyModyle: DynamicModule = PassportModule.register({ defaultStrategy: 'jwt' });

@Module({
    imports: [UsersModule, PassportJwtStrategyModyle,  JwtModule.register({
        secretOrPrivateKey: 'secretKey',
        verifyOptions: {
            algorithms: ['HS256'],
            ignoreExpiration: false,
        },
        signOptions: {
            expiresIn: 3600,
            algorithm: 'HS256',
        }
    })],
    providers: [HttpStrategy, JwtStrategy, SecurityService],
    exports: [HttpStrategy, JwtStrategy, SecurityService]
})
export class SecurityModule {

}