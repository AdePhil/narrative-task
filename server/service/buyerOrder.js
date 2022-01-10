const { BaseError } = require("../helpers/error");
const { BuyerOrder, DataPackageType } = require("../models");

const createBuyerOrder = async (payload) => {
  const { data_package_type_id } = payload;
  const packageType = await DataPackageType.findByPk(data_package_type_id);
  if (!packageType) {
    throw new BaseError({
      status: 404,
      message: "Package type does not exist",
    });
  }
  const buyerOrder = await BuyerOrder.create(payload);
  return buyerOrder;
};

const findAllBuyerOrder = async () => {
  const buyerOrder = await BuyerOrder.findAll({
    include: {
      model: DataPackageType,
    },
  });
  return buyerOrder;
};

const updateBuyerOrder = async (id, payload) => {
  const buyerOrder = await BuyerOrder.findByPk(id);
  if (!buyerOrder) {
    throw new BaseError({
      status: 404,
      message: "This Order does not exist",
    });
  }

  await BuyerOrder.update(payload, {
    where: {
      id,
    },
  });
  return true;
};

const deleteBuyerOrder = async (id) => {
  const buyerOrder = await BuyerOrder.findByPk(id);
  if (!buyerOrder) {
    throw new BaseError({
      status: 404,
      message: "This Order does not exist",
    });
  }

  await BuyerOrder.destroy({
    where: {
      id,
    },
  });

  return true;
};

module.exports = {
  createBuyerOrder,
  findAllBuyerOrder,
  updateBuyerOrder,
  deleteBuyerOrder,
};
