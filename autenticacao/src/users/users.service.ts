import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    
    findOneByEmail(email: string): any {
        return { username: 'user' };
    }

    async findOneByToken(token: string): Promise<any> {
        return { username: 'user' };
    }

}
