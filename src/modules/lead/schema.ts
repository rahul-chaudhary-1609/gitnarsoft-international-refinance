import Joi from 'joi';

export const addLead = Joi.object({
  customer_name: Joi.string().required(),
  customer_mobile: Joi.string().min(9).max(12).required()
});

export const getLead = Joi.object({
    lead_id: Joi.number().allow('',null).optional(),
});