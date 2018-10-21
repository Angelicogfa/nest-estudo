import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    async findOneByEmail(email: string): Promise<any> {
        return { user: '', email: email };
    }

    async findOneById(token: string): Promise<any> {
        return { user: '', email: '' };
    }

}
