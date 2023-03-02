import Joi from "joi";

export const postBodySchema = Joi.object({
   topic: Joi.string().min(10).max(64).required(),
   text: Joi.string().min(10).max(1000).required()
});

export const postParamsSchema = Joi.object({
   userId: Joi.string().required(),
});

export const postUpdateSchema = Joi.object({
   topic: Joi.string().min(10).max(64),
   text: Joi.string().min(10).max(1000)
})