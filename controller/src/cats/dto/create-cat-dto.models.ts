import { IsString, IsInt } from "class-validator";

export class CrateCatDto {
    @IsString()
    readonly name: string;
    @IsInt()
    readonly age: number;
    @IsString()
    readonly breed: string;
}