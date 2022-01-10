const { buyerOrderService } = require("../service");
const { BuyerOrder, DataPackageType } = require("../models");

const createBuyerOrder = async (req, res) => {
  try {
    const buyerOrder = await buyerOrderService.createBuyerOrder(req.body);
    return res
      .status(201)
      .json({ data: buyerOrder, message: "Order created successfully." });
  } catch (error) {
    console.log({ error });
    const errorMessage = error?.message || "Error updating buyer order.";
    const errorStatus = error.status || 500;
    return res.status(errorStatus).json({ message: errorMessage });
  }
};
const findAllBuyerOrder = async (req, res) => {
  try {
    const buyerOrder = await BuyerOrder.findAll({
      include: {
        model: DataPackageType,
      },
    });
    return res
      .status(200)
      .json({ message: "order retrieved successfully", data: buyerOrder });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ message: "Error getting buyer orders." });
  }
};

const updateBuyerOrder = async (req, res) => {
  const { id } = req.params;

  // Check if order exists
  try {
    const buyerOrder = await BuyerOrder.findByPk(id);
    if (!buyerOrder) {
      return res.status(499).json({ message: "This order does not exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error updating buyer order." });
  }
  //update order
  try {
    const buyerOrder = await BuyerOrder.update(req.body, {
      where: {
        id,
      },
    });
    return res.status(200).json({ message: "order updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error updating buyer order." });
  }
};

const deleteBuyerOrder = async (req, res) => {
  const { id } = req.params;

  // Check if order exists
  try {
    const buyerOrder = await BuyerOrder.findByPk(id);
    if (!buyerOrder) {
      return res.status(499).json({ message: "This order does not exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error deleting buyer order." });
  }
  try {
    const buyerOrder = await BuyerOrder.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({ message: "order deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting buyer order." });
  }
};

module.exports = {
  createBuyerOrder,
  findAllBuyerOrder,
  updateBuyerOrder,
  deleteBuyerOrder,
};
