import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    
    async findOneById(token: string): Promise<any> {
        return { user: '' };
    }

}
