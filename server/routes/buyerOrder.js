const router = require("express").Router();
const buyerOrderController = require("../controller/buyerOrder");

router.post("/create", buyerOrderController.createBuyerOrder);
router.get("/all", buyerOrderController.findAllBuyerOrder);
router.delete("/:id", buyerOrderController.deleteBuyerOrder);
router.patch("/:id", buyerOrderController.updateBuyerOrder);

module.exports = router;
