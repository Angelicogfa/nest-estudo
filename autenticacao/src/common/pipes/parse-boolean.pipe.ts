import { PipeTransform, ArgumentMetadata, BadRequestException, Injectable } from "@nestjs/common";

export class ParseBoolean implements PipeTransform<any, boolean> {
    
    constructor(private readonly required: boolean){

    }

    transform(value: any, metadata: ArgumentMetadata): boolean {
        if(value == 'true' || value == 'false') {
            return value == 'true' ? true : false;
        }
        
        if(this.required)
            throw new BadRequestException(`Não foi possível processar o valor ${value} para boolean`);
    }
}