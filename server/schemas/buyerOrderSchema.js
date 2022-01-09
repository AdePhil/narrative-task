const Joi = require("joi");

const schema = {
  BODY: Joi.object({
    name: Joi.string().required(),
    max_bid_price: Joi.number().min(1).required(),
    data_package_type_id: Joi.number().min(1).required(),
  }).strict(),
  ID: Joi.object({
    id: Joi.number().min(1).required(),
  }),
};

module.exports = schema;
