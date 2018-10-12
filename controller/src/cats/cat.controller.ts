import { Controller, Get, Req, Post, HttpCode, Param, Body, BadGatewayException, ForbiddenException, UseFilters, Pipe, UsePipes } from '@nestjs/common';
import { CrateCatDto } from './dto/create-cat-dto.models';
import { Cat } from './interfaces/cat.model';
import { CatService } from './cat.service';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { JoiValidatePipe } from '../common/pipes/joi-validate.pipe';
import { CatJoiSchema } from './schemas/cat-joi.schema';
import { ValidatePipe } from '../common/pipes/validate.pipe';

@Controller('cat')
@UseFilters(new HttpExceptionFilter())
export class CatController {

    constructor(readonly catService: CatService) {

    }

    // @Get()
    // findAll(@Req() request) {
    //     return 'This action returns all cats';
    // }

    /**
     * Request method abcd ab*cd ab-cd
     * @param request 
     */
    // @Get('ab*cd')
    // findAllByTag(@Req() request) {
    //     return 'This route uses a wildcard';
    // }

    // @Get('promisse')
    // findAllPromisse() : Observable<any> {
    //     return of([]);
    // }

    // @Get('async')
    // async findAllAsync() : Promise<any> {
    //     return [];
    // }

    // @Get(':id')
    // findOne(@Param() params) {
    //     console.log(`Id: ${params.id}`);
    //     return `This action returns a #${params.id} cat`;
    // }

    // @Get(':id')
    // findById(@Param('id') id) {
    //     return `This action returns id #${id} cat`;
    // }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catService.findAll();
    }

    @Post()
    //@UsePipes(new JoiValidatePipe(CatJoiSchema))
    //@UsePipes(new ValidatePipe())
    create(@Body(new ValidatePipe()) model: CrateCatDto) {
        this.catService.create(model);
    }

    @Get('/error')
    //@UseFilters(new HttpExceptionFilter())
    error() {
        throw new ForbiddenException('Acesso negado');
    }
}
