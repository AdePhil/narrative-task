const { BaseError } = require("../helpers/error");
const { BuyOrder, DataPackageType } = require("../models");

const createBuyOrder = async (payload) => {
  const { data_package_type_id } = payload;
  const packageType = await DataPackageType.findByPk(data_package_type_id);
  if (!packageType) {
    throw new BaseError({
      status: 404,
      message: "Package type does not exist",
    });
  }
  const buyOrder = await BuyOrder.create(payload);
  return buyOrder;
};

const findAllBuyOrder = async () => {
  const buyOrder = await BuyOrder.findAll({
    include: {
      model: DataPackageType,
    },
  });
  return buyOrder;
};

const updateBuyOrder = async (id, payload) => {
  const buyOrder = await BuyOrder.findByPk(id);
  if (!buyOrder) {
    throw new BaseError({
      status: 404,
      message: "This Order does not exist",
    });
  }

  await BuyOrder.update(payload, {
    where: {
      id,
    },
  });
  return true;
};

const deleteBuyOrder = async (id) => {
  const buyOrder = await BuyOrder.findByPk(id);
  if (!buyOrder) {
    throw new BaseError({
      status: 404,
      message: "This Order does not exist",
    });
  }

  await BuyOrder.destroy({
    where: {
      id,
    },
  });

  return true;
};

module.exports = {
  createBuyOrder,
  findAllBuyOrder,
  updateBuyOrder,
  deleteBuyOrder,
};
