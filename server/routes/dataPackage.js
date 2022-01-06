const router = require("express").Router();
const dataPackageTypeController = require("../controller/dataPackage");
router.post("/create", dataPackageTypeController.createDataPackage);
router.get("/all", dataPackageTypeController.getDataPackage);

module.exports = router;
