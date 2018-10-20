import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService) { }

    async validateUser(token: string): Promise<any> {
        
        return await this.userService.findOneByToken(token);
    }

}
