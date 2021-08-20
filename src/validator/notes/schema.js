const Joi = require('joi');

const NotePayloadSchema = Joi.object({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.items(Joi.string()).required(),
});

module.exports = { NotePayloadSchema };