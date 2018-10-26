import { Injectable, BadRequestException } from '@nestjs/common';
import { IUser, UserModel } from '../models/user.model';
import * as bcrypt from "bcrypt";
import { isNullOrUndefined } from 'util';


@Injectable()
export class UsersService {

    private readonly users: IUser[] = [];

    async findOneByLogin(login: string): Promise<IUser> {
        return this.users.find(user => user.login === login);
    }

    async findOneById(id: number): Promise<IUser> {
        return this.users.find(user=> user.id === id);
    }

    async findAll(): Promise<IUser[]> {
        return this.users.map(user=> new UserModel(user));
    }

    async create(login: string, senha: string, email: string): Promise<IUser> {

        let user: IUser = await this.findOneByLogin(login);
        if (!isNullOrUndefined(user)) throw new BadRequestException('Login já existe');

        const id: number = this.users.map(t => t.id).sort()[this.users.length - 1] + 1;

        user = new UserModel({ id: isNaN(id) ? 1 : id, login, email, senha: await bcrypt.hashSync(senha, 10) });

        this.users.push(user);
        return user;
    }

    async autenticate(login: string, senha: string): Promise<boolean> {

        const user = this.users.find(user => user.login === login);
        if (isNullOrUndefined(user)) return false;

        return await bcrypt.compareSync(senha, user.senha);
    }
}
