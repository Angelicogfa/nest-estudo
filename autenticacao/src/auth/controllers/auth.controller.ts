import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../common/security/decorators/user.decorator';
import { CustomAuthGuard } from 'common/security/guards/custom-auth.guard';

@Controller('auth')
export class AuthController {

    @Get('users')
    @UseGuards(new CustomAuthGuard())
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
