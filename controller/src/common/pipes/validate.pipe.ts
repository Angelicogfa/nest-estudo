import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";

export class ValidatePipe implements PipeTransform {

    async transform(value: any, { metatype }: ArgumentMetadata) {

        if (!metatype && !this.toValidate(metatype))
            return value;

        const object = plainToClass(metatype, value);
        const errors = await validate(object);

        if(errors.length > 0)
            throw new BadRequestException(errors.map(t=> `${t.property}: ${t.value}`));

        return value;
    }

    private toValidate(metatype): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find((type)=>  metatype === type);
    }

}