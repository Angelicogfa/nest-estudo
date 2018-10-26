import { Controller, Post, Body, Get, UseGuards, UseInterceptors, ClassSerializerInterceptor, Query } from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';
import { ok } from 'assert';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../common/security/decorators/user.decorator';
import { IUser } from '../../users/models/user.model';
import { ParseBoolean } from '../../common/pipes/parse-boolean.pipe';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {

    constructor(private readonly userService: UsersService) { }

    @Post()
    async createUser(@Body() body): Promise<IUser> {

        const { login, senha, email } = body;
        const user = await this.userService.create(login, senha, email);
        return user;
    }

    @Get()
    @UseGuards(AuthGuard())
    async getAll(@User() user, @Query('all', new ParseBoolean(false)) all: boolean = false): Promise<IUser[]> {

        const users = await this.userService.findAll();
        return all ? users : users.filter(tuser => tuser.id !== user.id);
    }
}
