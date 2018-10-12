import * as Joi from "joi";

export const CatJoiSchema: Joi.JoiObject = Joi.object().keys({
    name: Joi.string().min(2).max(20).required(),
    age: Joi.number().required(),
    breed: Joi.any().allow([ 'persian', 'siames', 'vira-lata'])
});
