import { createParamDecorator } from "@nestjs/common";

export const User = createParamDecorator((data, req) => {
    console.log(`Parametro informado no decorator: ${data}`);
    return req.user;
});