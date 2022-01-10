const Joi = require("joi");

const schema = {
  POST: Joi.object({
    name: Joi.string().required().label("Order name"),
  }).strict(),
};

module.exports = schema;
