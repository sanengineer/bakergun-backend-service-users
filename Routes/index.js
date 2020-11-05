const express = require("express");
const router = express.Router();
const controllerIndex = require("../Controllers/controller-index");

router.get("/", controllerIndex.indexView);

module.exports = router;
