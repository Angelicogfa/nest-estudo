import { PipeTransform, ArgumentMetadata, BadRequestException, Logger } from "@nestjs/common";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { ValidatePipeOptions } from "./validate-pipes-options.pipe";
import { promises } from "fs";

export class ValidatePipe implements PipeTransform {

    constructor(readonly options?: ValidatePipeOptions) {

    }

    async transform(value: any, { metatype }: ArgumentMetadata): Promise<any> {

        console.log('Validando body');
        if (!metatype && !this.toValidate(metatype))
            return value;

        const object = plainToClass(metatype, value);
        const errors = await validate(object);

        if (errors.length > 0)
            throw new BadRequestException(errors.map(t => `${t.property}: ${t.value}`));

        if (this.options && this.options.convert && this.options.convert === true)
            return object;
        else
            return value;
    }

    private toValidate(metatype): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find((type) => metatype === type);
    }

}