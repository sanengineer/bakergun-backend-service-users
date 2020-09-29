const express = require("express");
const router = express.Router();
const mw = require("../Helpers/middlewares");
const controllerApiImagesAssets = require("../Controllers/controller-api-images-assets");

// All Posts Images
router.get("/", controllerApiImagesAssets.assets);

// All Posts Images By Name
router.get("/:id", mw.mustBeInteger, controllerApiImagesAssets.asset);

module.exports = router;
