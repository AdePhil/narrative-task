const router = require("express").Router();
const buyerOrderController = require("../controller/buyerOrder");

router.post("/create", buyerOrderController.createBuyerOrder);
router.get("/all", buyerOrderController.findAllBuyerOrder);
router.delete("/delete/:id", buyerOrderController.updateBuyerOrder);
router.patch("/update", buyerOrderController.deleteBuyerOrder);

module.exports = router;
