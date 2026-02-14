import Joi from 'joi';
import { packages } from '../repositories/payment-repository.js';

export const transactionPayloadSchema = Joi.object({
    email: Joi.string().min(3).max(50).email().required(),
    name: Joi.string().required(),
    package_id: Joi.string()
        .valid(...packages.map(p => p.id))
        .required()
        .messages({
            'any.only': 'package_id value not valid',
            'any.required': 'package_id is required'
        }),
});