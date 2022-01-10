const { buyerOrderService } = require("../service");

const createBuyerOrder = async (req, res) => {
  try {
    const buyerOrder = await buyerOrderService.createBuyerOrder(req.body);
    return res
      .status(201)
      .json({ data: buyerOrder, message: "Order created successfully." });
  } catch (error) {
    const errorMessage = error?.message || "Error creating buyer order.";
    const errorStatus = error.status || 500;
    return res.status(errorStatus).json({ message: errorMessage });
  }
};
const findAllBuyerOrder = async (req, res) => {
  try {
    const buyerOrder = await buyerOrderService.findAllBuyerOrder(req.body);
    return res
      .status(200)
      .json({ message: "Order retrieved successfully.", data: buyerOrder });
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving buyer orders." });
  }
};

const updateBuyerOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const buyerOrder = await buyerOrderService.updateBuyerOrder(id, req.body);
    return res.status(200).json({ message: "Order updated successfully." });
  } catch (error) {
    const errorMessage = error?.message || "Error updating buyer order.";
    const errorStatus = error.status || 500;
    return res.status(errorStatus).json({ message: errorMessage });
  }
};

const deleteBuyerOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await buyerOrderService.deleteBuyerOrder(id);
    return res.status(200).json({ message: "Order deleted successfully." });
  } catch (error) {
    const errorMessage = error?.message || "Error deleting buyer order.";
    const errorStatus = error.status || 500;
    return res.status(errorStatus).json({ message: errorMessage });
  }
};

module.exports = {
  createBuyerOrder,
  findAllBuyerOrder,
  updateBuyerOrder,
  deleteBuyerOrder,
};
