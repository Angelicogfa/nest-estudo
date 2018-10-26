import { Controller, Get, UseGuards, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { SecurityService } from '../../common/security/services/security.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly securitySerice: SecurityService) { }

    readonly users = [];

    @Post('token')
    @HttpCode(HttpStatus.OK)
    async token(@Body('login') login, @Body('senha') senha) {

        return {
            token: await this.securitySerice.singIn(login, senha),
            expireIn: 3600
        }
    }
}
