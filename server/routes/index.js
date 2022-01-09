const router = require("express").Router();
const buyerOrderRoutes = require("./buyerOrder");
const dataPackageTypeRoutes = require("./dataPackage");

router.use("/package-types", dataPackageTypeRoutes);
router.use("/buyer-orders", buyerOrderRoutes);

module.exports = router;
