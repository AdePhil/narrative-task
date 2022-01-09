const router = require("express").Router();
const buyerOrderController = require("../controller/buyerOrder");
const { schemaValidator } = require("../middleware");
const { buyerOrderSchema } = require("../schemas");

router.post(
  "/",
  schemaValidator(buyerOrderSchema.BODY, "body"),
  buyerOrderController.createBuyerOrder
);
router.get("/", buyerOrderController.findAllBuyerOrder);
router.delete(
  "/:id",
  schemaValidator(buyerOrderSchema.ID, "params"),
  buyerOrderController.deleteBuyerOrder
);
router.patch(
  "/:id",
  schemaValidator(buyerOrderSchema.ID, "params"),
  schemaValidator(buyerOrderSchema.BODY, "body"),
  buyerOrderController.updateBuyerOrder
);

module.exports = router;
