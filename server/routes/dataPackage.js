const router = require("express").Router();
const {
  createDataPackage,
  getDataPackage,
} = require("../controller/dataPackage");
const { schemaValidator } = require("../middleware");
const { dataPackageSchema } = require("../schemas");

router.post(
  "/",
  schemaValidator(dataPackageSchema.BODY, "body"),
  createDataPackage
);
router.get("/", getDataPackage);

module.exports = router;
