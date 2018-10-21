import { Injectable } from '@nestjs/common';
import { UsersService } from '../../../users/services/users.service';
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class SecurityService {

    constructor(private readonly userService: UsersService,
        private readonly jwtService: JwtService) { }

    async singIn(email: string): Promise<string> {
        const payload: JwtPayload = {
            email: email
        };

        return this.jwtService.sign(payload);
    }

    async validatePayload(payload: JwtPayload): Promise<any> {
        return await this.userService.findOneByEmail(payload.email);
    }

    async validateUser(token: string): Promise<any> {

        return await this.userService.findOneById('');
    }

}
