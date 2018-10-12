import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";

import * as Joi from "joi";

export class JoiValidatePipe implements PipeTransform {

    constructor(private readonly schema: Joi.JoiObject) { }

    transform(value: any, metadata: ArgumentMetadata) {
        
        const { error } = Joi.validate(value, this.schema);
        if(error){
            throw new BadRequestException(`Um erro ocorreu: ${error.message}`);
        }
        return value;
    }

} 