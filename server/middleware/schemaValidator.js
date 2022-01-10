const Joi = require("joi");

const schemaValidator = (schema) => {
  return (req, res, next) => {
    const payload = { ...req.body, ...req.params, ...req.query };
    const { error, details } = schema.validate(payload);
    if (!error) {
      next();
    } else {
      const message = error.details.map((i) => i.message).join(",");
      const refineMessage = message.replace(/["']+/g, "");
      res.status(422).json({ message: refineMessage });
    }
  };
};

module.exports = schemaValidator;
