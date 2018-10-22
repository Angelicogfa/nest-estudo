import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../common/security/decorators/user.decorator';
import { CustomAuthGuard } from 'common/security/guards/custom-auth.guard';
import { SecurityService } from '../../common/security/services/security.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly securitySerice: SecurityService) {}

    @Post('token')
    async token(@Body('email') email) {
        return await this.securitySerice.singIn(email);
    }

    @Get('users')
    @UseGuards(AuthGuard())
    getAll(@User() user) {
        console.log(user);
        return [
            {
                nome: 'Jose'
            }
            ,
            {
                nome: 'Maria'
            }
        ];
    }

}
