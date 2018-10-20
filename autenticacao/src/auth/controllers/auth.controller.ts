import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../common/security/decorators/user.decorator';

@Controller('auth')
export class AuthController {

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
