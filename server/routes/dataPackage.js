const router = require("express").Router();
const dataPackageTypeController = require("../controller/dataPackage");
router.post("/create", dataPackageTypeController.createDataPackage);

module.exports = router;
