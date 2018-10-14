import { ValidatorOptions } from "@nestjs/common/interfaces/external/validator-options.interface";

export interface ValidatePipeOptions extends ValidatorOptions{
    convert?: boolean;
}