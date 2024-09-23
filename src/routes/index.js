const express = require("express");
const carRouter = require("./user.router");
const router = express.Router();

// colocar las rutas aquí
router.use("/users", carRouter);

module.exports = router;
