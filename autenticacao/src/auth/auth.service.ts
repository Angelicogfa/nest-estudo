import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService,
        private readonly jwtService: JwtService) {}


    async singIn(email: string): Promise<string> {
        
        const user: JwtPayload = { email: email }; 
        return this.jwtService.sign(user);
    }
    

    async validateUserByPayload(payload: JwtPayload): Promise<any> {
        return await this.userService.findOneByEmail(payload.email);
    }

    //Primeira abordagem de validação
    async validateUser(token: string): Promise<any> {
        
        // Valida se o token passado em uma requisição http
        // está associados com qualquer conta do bando de dados

        return await this.userService.findOneByToken(token);
    }

}
