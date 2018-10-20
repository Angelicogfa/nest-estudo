import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'common/decorators/user.decorator';

@Controller('users')
export class UsersController {

    @Get()
    @UseGuards(AuthGuard())
    async findAll(@User() user): Promise<any> {
        return user.username;
    }

}
