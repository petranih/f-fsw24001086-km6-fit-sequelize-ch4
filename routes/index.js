const router = require("express").Router();

const Car = require("./carRouter")
const CarAdmin = require("./carAdminRouter.js")

router.use("/api/v1/cars", Car);
router.use("/cars", CarAdmin);

module.exports = router;