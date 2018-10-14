import { of } from "rxjs";

export const asyncProvider = {

    provide: 'async-connection',
    useFactory: async () => {
        return await of({ nome: 'teste' });
    }
    
}