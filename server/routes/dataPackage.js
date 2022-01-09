const router = require("express").Router();
const dataPackageTypeController = require("../controller/dataPackage");
router.post("/", dataPackageTypeController.createDataPackage);
router.get("/", dataPackageTypeController.getDataPackage);

module.exports = router;
