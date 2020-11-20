const express = require("express");
const controllerAdmin = require("../Controllers/controller-admin");
const middlewares = require("../Helpers/middlewares");
const router = express.Router();

// user game
router.post("/user-game", controllerAdmin.createUserGame);
router.get("/user-game", controllerAdmin.getAllOrSearchByUsername);
router.put("/user-game/:id", controllerAdmin.updateUserGame);
router.delete(
  "/user-game/:id",
  middlewares.mustBeString,
  controllerAdmin.deletOneUserGame
);

// user game biodata
router.post("/user-game-biodata", controllerAdmin.createUserGameBiodata);
router.get("/user-game-biodata", controllerAdmin.getAllUserGameBiodata);
router.put("/user-game-biodata/:id", controllerAdmin.updateUserGameBiodata);
router.delete(
  "/user-game-biodata/:id",
  controllerAdmin.deleteOneUserGameBiodata
);

// user game history
router.post("/user-game-history", controllerAdmin.createUserGameHistory);
router.get("/user-game-history", controllerAdmin.getAllUserGameHistory);
router.put("/user-game-history/:id", controllerAdmin.updateUserGameHistory);
router.delete(
  "/user-game-history/:id",
  controllerAdmin.deleteOneUserGameHistory
);

module.exports = router;
