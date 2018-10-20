import { Module } from "@nestjs/common";
import { HttpStrategy } from "./strategys/http-strategy";
import { UsersService } from "../../users/services/users.service";
import { UsersModule } from "../../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { SecurityService } from "./services/security.service";

export const PassportStrategyModule = PassportModule.register({ defaultStrategy: 'bearer' });

@Module({
    imports: [UsersModule, PassportStrategyModule],
    providers: [HttpStrategy, UsersService, SecurityService],
    exports: [HttpStrategy, PassportStrategyModule]
})
export class SecurityModule {

}