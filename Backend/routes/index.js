const express = require("express");
const router = express.Router();

router.use("/cajas", require("./cajaRoutes"));
router.use("/galletas", require("./galletaRoutes"));
router.use("/ordenes", require("./ordenRoutes"));

module.exports = router;
