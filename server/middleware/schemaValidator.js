const Joi = require("joi");

const schemaValidator = (schema, property) => {
  return (req, res, next) => {
    const { error, details } = schema.validate(req[property]);
    if (!error) {
      next();
    } else {
      const message = error.details.map((i) => i.message).join(",");
      res.status(422).json({ message });
    }
  };
};

module.exports = schemaValidator;
