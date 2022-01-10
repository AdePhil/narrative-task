const router = require("express").Router();
const buyerOrderController = require("../controller/buyerOrder");
const { schemaValidator } = require("../middleware");
const { buyerOrderSchema } = require("../schemas");

router.post(
  "/",
  schemaValidator(buyerOrderSchema.CREATE),
  buyerOrderController.createBuyerOrder
);
router.get("/", buyerOrderController.findAllBuyerOrder);
router.delete(
  "/:id",
  schemaValidator(buyerOrderSchema.DELETE),
  buyerOrderController.deleteBuyerOrder
);
router.patch(
  "/:id",
  schemaValidator(buyerOrderSchema.UPDATE),
  buyerOrderController.updateBuyerOrder
);

module.exports = router;
