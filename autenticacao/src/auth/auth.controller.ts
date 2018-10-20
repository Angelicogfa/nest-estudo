import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('token')
    async createToken(@Body() body): Promise<any> {
        const acesstoken = await this.authService.singIn(body.email);
        return {
            expireIn: 3600,
            acesstoken
        }
    }
}
