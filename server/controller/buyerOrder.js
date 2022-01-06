const { BuyerOrder, DataPackageType } = require("../models");

const createBuyerOrder = async (req, res) => {
  try {
    const buyerOrder = await BuyerOrder.create(req.body);
    return res
      .status(201)
      .json({ message: "order created successfully", data: buyerOrder });
  } catch (error) {
    return res.status(500).json({ message: "Error saving buyer order to db" });
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
    return res
      .status(500)
      .json({ message: "Error getting buyer orders from db" });
  }
};

const updateBuyerOrder = async (req, res) => {
  const { id, ...rest } = res.body;
  try {
    const buyerOrder = await BuyerOrder.update(rest, {
      where: {
        id,
      },
    });
    return res
      .status(200)
      .json({ message: "order updated successfully", data: buyerOrder });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error updating buyer order to db" });
  }
};

const deleteBuyerOrder = async (req, res) => {
  const id = req.params.id;
  try {
    const buyerOrder = await BuyerOrder.destroy({
      where: {
        id,
      },
    });
    return res
      .status(200)
      .json({ message: "order deleted successfully", data: buyerOrder });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting buyer order to db" });
  }
};

module.exports = {
  createBuyerOrder,
  findAllBuyerOrder,
  updateBuyerOrder,
  deleteBuyerOrder,
};
