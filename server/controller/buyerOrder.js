const { BuyerOrder } = require("../models/db");

const createBuyerOrder = async (req, res) => {
  try {
    const buyerOrder = await BuyerOrder.create(req.body);
    return res
      .status(200)
      .json({ message: "order created successfully", data: buyerOrder });
  } catch (error) {
    return res.status(400).json({ message: "Error saving to db" });
  }
};

module.exports = {
  createBuyerOrder,
};
