import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";

export class ParseIntPipe implements PipeTransform<string, number> {

    transform(value: string, metadata: ArgumentMetadata): number {
        const number = parseInt(value, 10);
        if(isNaN(number))
            throw new BadRequestException(`O valor ${value} não é um número`);
        return number;
    }

}