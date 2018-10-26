import { Exclude } from "class-transformer";

/**
 * Interface base para usuário
 */
export interface IUser {
    id: number,
    login: string,
    senha: string,
    email: string
}

/**
 * Implementação base para usuário
 */
export class UserModel implements IUser {

    constructor(partial: Partial<UserModel>){
        Object.assign(this, partial);
    }

    id: number;
    login: string;
    
    @Exclude()
    senha: string;
    email: string;
}