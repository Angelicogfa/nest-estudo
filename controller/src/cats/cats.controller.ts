import { Controller, Get, Req, Post, HttpCode, Param } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('cats')
export class CatsController {
   
    @Get()
    findAll(@Req() request) {
        return 'This action returns all cats';
    }

    /**
     * Request method abcd ab*cd ab-cd
     * @param request 
     */
    @Get('ab*cd')
    findAllByTag(@Req() request) {
        return 'This route uses a wildcard';
    }

    @Get('promisse')
    findAllPromisse() : Observable<any> {
        return of([]);
    }

    @Get('async')
    async findAllAsync() : Promise<any> {
        return [];
    }

    // @Get(':id')
    // findOne(@Param() params) {
    //     console.log(`Id: ${params.id}`);
    //     return `This action returns a #${params.id} cat`;
    // }

    @Get(':id')
    findById(@Param('id') id) {
        console.log(`Id: ${id}`);
        return `This action returns id #${id} cat`;
    }

    @Post()
    @HttpCode(204)
    create() {
        return 'This action adds a new cat';
    }
}
