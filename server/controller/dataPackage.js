const { DataPackageType } = require("../models");

const createDataPackage = async (req, res) => {
  console.log("Here in controller", req.body);
  try {
    const dataPackage = await DataPackageType.create(req.body);
    return res
      .status(200)
      .json({ message: "order created successfully", data: dataPackage });
  } catch (error) {
    console.log({ error });
    return res.status(400).json({ message: "Error saving to db" });
  }
};

module.exports = {
  createDataPackage,
};
