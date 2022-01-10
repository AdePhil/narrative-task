const { dataPackageService } = require("../service");

const createDataPackage = async (req, res) => {
  try {
    const dataPackage = await dataPackageService.createDataPackage(req.body);
    return res.status(201).json({
      message: "Data package type created successfully",
      data: dataPackage,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error saving to db" });
  }
};

const getDataPackage = async (req, res) => {
  try {
    const dataPackage = await dataPackageService.getDataPackage();
    return res.status(200).json({
      message: "Data package type created successfully",
      data: dataPackage,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error saving to db" });
  }
};

module.exports = {
  createDataPackage,
  getDataPackage,
};
