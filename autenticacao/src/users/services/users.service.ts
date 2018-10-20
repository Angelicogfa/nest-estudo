import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    async findOneByToken(token: string): Promise<any> {
        return { user: '' };
    }

}
