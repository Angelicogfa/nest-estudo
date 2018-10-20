import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

    constructor(readonly userService: UsersService) {}

    async validateUser(token: string): Promise<any> {
        
        // Valida se o token passado em uma requisição http
        // está associados com qualquer conta do bando de dados

        return await this.userService.findOneByToken(token);
    }

}
