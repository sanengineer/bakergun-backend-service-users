const express = require("express");
const router = express.Router();
const mw = require("../Helpers/middlewares");
const controllerApiGameboardAssets = require("../Controllers/controller-api-gameboard-assets");

// All Posts Gameboard
router.get("/", controllerApiGameboardAssets.assets);

// All Posts Gameboard By Name
// router.get("/:id", mw.mustBeInteger, controllerApiGameboardAssets.asset);

module.exports = router;
