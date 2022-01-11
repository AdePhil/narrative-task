const { buyOrderService } = require("../service");

const createBuyOrder = async (req, res) => {
  try {
    const buyOrder = await buyOrderService.createBuyOrder(req.body);
    return res
      .status(201)
      .json({ data: buyOrder, message: "Order created successfully." });
  } catch (error) {
    const errorMessage = error?.message || "Error creating buy order.";
    const errorStatus = error.status || 500;
    return res.status(errorStatus).json({ message: errorMessage });
  }
};
const findAllBuyOrder = async (req, res) => {
  try {
    const buyOrder = await buyOrderService.findAllBuyOrder(req.body);
    return res
      .status(200)
      .json({ message: "Order retrieved successfully.", data: buyOrder });
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving buy orders." });
  }
};

const updateBuyOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const buyOrder = await buyOrderService.updateBuyOrder(id, req.body);
    return res.status(200).json({ message: "Order updated successfully." });
  } catch (error) {
    const errorMessage = error?.message || "Error updating buy order.";
    const errorStatus = error.status || 500;
    return res.status(errorStatus).json({ message: errorMessage });
  }
};

const deleteBuyOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await buyOrderService.deleteBuyOrder(id);
    return res.status(200).json({ message: "Order deleted successfully." });
  } catch (error) {
    const errorMessage = error?.message || "Error deleting buy order.";
    const errorStatus = error.status || 500;
    return res.status(errorStatus).json({ message: errorMessage });
  }
};

module.exports = {
  createBuyOrder,
  findAllBuyOrder,
  updateBuyOrder,
  deleteBuyOrder,
};
