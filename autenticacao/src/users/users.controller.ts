import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../common/decorators/user.decorator';
import { JwtAutGuard } from '../auth/jwt-aut.guard';

@Controller('users')
export class UsersController {

    @Get()
    @UseGuards(JwtAutGuard)
    async findAll(@User() user): Promise<any> {
        return user.username;
    }

}
