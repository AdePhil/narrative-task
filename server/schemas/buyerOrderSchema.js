const Joi = require("joi");

const schema = {
  CREATE: Joi.object({
    name: Joi.string().required().label("Order name"),
    max_bid_price: Joi.number().min(1).required().label("Max bid price"),
    data_package_type_id: Joi.number()
      .min(1)
      .required()
      .label("Data Package type"),
  }),
  UPDATE: Joi.object({
    name: Joi.string().required().label("Order name"),
    max_bid_price: Joi.number().min(1).required().label("Max bid price"),
    data_package_type_id: Joi.number()
      .min(1)
      .required()
      .label("Data Package type"),
  }),
  DELETE: Joi.object({
    id: Joi.number().min(1).required().label("Id"),
  }),
};

module.exports = schema;
