const { DataPackageType } = require("../models");

const createDataPackage = async (payload) => {
  const dataPackage = await DataPackageType.create(payload);
  return dataPackage;
};

const getDataPackage = async () => {
  const dataPackage = await DataPackageType.findAll();
  return dataPackage;
};

module.exports = {
  createDataPackage,
  getDataPackage,
};
