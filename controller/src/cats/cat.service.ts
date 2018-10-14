import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.model';

@Injectable()
export class CatService {

    private readonly cats: Cat[] = [];

    async findOne(id: number): Promise<Cat> {
        if(this.cats.length > id)
            return this.cats[id];
        else
            return null;
    }

    create(cat: Cat) {
        this.cats.push(cat);
    }

    async findAll(): Promise<Cat[]> {
        return this.cats;
    }

}
