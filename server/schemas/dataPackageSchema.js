const Joi = require("joi");

const schema = {
  BODY: Joi.object({
    name: Joi.string().required(),
  }).strict(),
};

module.exports = schema;
