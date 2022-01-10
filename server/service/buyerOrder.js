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

module.exports = {
  createBuyerOrder,
};
