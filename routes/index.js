const router = require("express").Router();

const Customer = require("./carRouter")

router.use("/api/v1/cars", Customer);

module.exports = router;