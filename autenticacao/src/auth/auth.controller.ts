import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    @Get('users')
    @UseGuards(AuthGuard())
    getAll() {
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
