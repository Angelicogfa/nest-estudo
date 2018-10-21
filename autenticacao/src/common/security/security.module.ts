import { Module, DynamicModule } from "@nestjs/common";
import { HttpStrategy } from "./strategys/http.strategy";
import { UsersService } from "../../users/services/users.service";
import { UsersModule } from "../../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { SecurityService } from "./services/security.service";
import { JwtModule } from "@nestjs/jwt";

export const PassportStrategyModule: DynamicModule = PassportModule.register({ defaultStrategy: 'bearer' });

export const PassportJwtStrategyModyle: DynamicModule[] = [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
        secretOrPrivateKey: 'secretKey',
        signOptions: {
            expiresIn: 3600
        }
    })
];

@Module({
    imports: [UsersModule, PassportStrategyModule, ...PassportJwtStrategyModyle],
    providers: [HttpStrategy, UsersService, SecurityService],
    exports: [HttpStrategy, PassportStrategyModule, ...PassportJwtStrategyModyle]
})
export class SecurityModule {

}