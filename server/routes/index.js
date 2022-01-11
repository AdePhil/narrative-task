const router = require("express").Router();
const buyOrderRoutes = require("./buyOrder");
const dataPackageTypeRoutes = require("./dataPackage");

router.use("/package-types", dataPackageTypeRoutes);
router.use("/buy-orders", buyOrderRoutes);

module.exports = router;
