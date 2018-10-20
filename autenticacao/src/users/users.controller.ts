import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../common/decorators/user.decorator';
import { JwtAutGuard } from '../auth/guards/jwt-aut.guard';

@Controller('users')
export class UsersController {

    // @Get()
    // @UseGuards(JwtAutGuard)
    // async findAll(@User() user): Promise<any> {
    //     return user.username;
    // }


    @Get()
    @UseGuards(AuthGuard())
    async findAll(@User() user): Promise<any> {
        return 'Ola';//user.username;
    }
}
