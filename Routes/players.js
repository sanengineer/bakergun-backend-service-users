const express = require("express");
const router = express.Router();
const middleWare = require("../Helpers/middlewares");
const controllerApiPlayers = require("../Controllers/controller-api-players");

// All Posts
router.get("/", controllerApiPlayers.players);

// All Post By Id
router.get("/:id", middleWare.mustBeInteger, controllerApiPlayers.player);

// Insert A New Post
router.post("/", middleWare.checkFieldsPost, controllerApiPlayers.postplayer);

// Update A Post
router.put(
  "/:id",
  middleWare.mustBeInteger,
  middleWare.checkFieldsPost,
  controllerApiPlayers.putplayer
);

// Delete A Post
router.delete(
  "/:id",
  middleWare.mustBeInteger,
  controllerApiPlayers.deleteplayer
);

module.exports = router;
