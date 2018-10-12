import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.model';

@Injectable()
export class CatService {

    private readonly cats: Cat[] = [];

    create(cat: Cat){
        this.cats.push(cat);
    }

    async findAll() : Promise<Cat[]>{
        return this.cats;
    }

}
