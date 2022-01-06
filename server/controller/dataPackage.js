const { DataPackageType } = require("../models");

const createDataPackage = async (req, res) => {
  try {
    const dataPackage = await DataPackageType.create(req.body);
    return res.status(200).json({
      message: "Data package type created successfully",
      data: dataPackage,
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ message: "Error saving to db" });
  }
};

module.exports = {
  createDataPackage,
};
