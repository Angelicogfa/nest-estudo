import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { UsersService } from '../../../users/services/users.service';
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { IUser } from '../../../users/models/user.model';

@Injectable()
export class SecurityService {

    constructor(private readonly userService: UsersService,
        private readonly jwtService: JwtService) { }

    async singIn(login: string, senha: string): Promise<string> {
        
        if(!await this.userService.autenticate(login, senha))
            throw new BadRequestException('Usuário ou senha inválidos');
        
        const user: IUser = await this.userService.findOneByLogin(login);

        const payload: JwtPayload = {
            id: user.id,
            email: user.email,
        };

        return this.jwtService.sign(payload);
    }

    async validatePayload(token: string): Promise<any> {

        try {
            this.jwtService.verify(token);
            const payload: JwtPayload = <JwtPayload>this.jwtService.decode(token, { json: true });

            const user = await this.userService.findOneById(payload.id);
            return user;
        }
        catch (err) {
            throw new UnauthorizedException('Token expirado');
        }
    }

    async validateUser(token: string): Promise<any> {

        // TODO: Implementar tratativa para caregamento por token
        return await this.userService.findOneById(0);
    }
}
