const router = require("express").Router();
const buyerOrderController = require("../controller/buyerOrder");

router.post("/", buyerOrderController.createBuyerOrder);
router.get("/", buyerOrderController.findAllBuyerOrder);
router.delete("/:id", buyerOrderController.deleteBuyerOrder);
router.patch("/:id", buyerOrderController.updateBuyerOrder);

module.exports = router;
