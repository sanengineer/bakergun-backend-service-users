const express = require("express");
const router = express.Router();
const userGame = require("../Controllers/controller-api-user-game");

router.post("/", userGame.create);
router.get("/:id", userGame.getOne);
router.delete("/:id", userGame.deleteOne);
router.delete("/", userGame.deleteAll);

module.exports = router;
