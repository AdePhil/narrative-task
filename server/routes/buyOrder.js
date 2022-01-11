const router = require("express").Router();
const buyOrderController = require("../controller/buyOrder");
const { schemaValidator } = require("../middleware");
const { buyOrderSchema } = require("../schemas");

router.post(
  "/",
  schemaValidator(buyOrderSchema.CREATE),
  buyOrderController.createBuyOrder
);
router.get("/", buyOrderController.findAllBuyOrder);
router.delete(
  "/:id",
  schemaValidator(buyOrderSchema.DELETE),
  buyOrderController.deleteBuyOrder
);
router.patch(
  "/:id",
  schemaValidator(buyOrderSchema.UPDATE),
  buyOrderController.updateBuyOrder
);

module.exports = router;
