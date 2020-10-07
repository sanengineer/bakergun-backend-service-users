const express = require("express");
const router = express.Router();
const middleware = require("../Helpers/middlewares");
const controllerAdmin = require("../Controllers/controller-admin");

router.get("/dashboard", controllerAdmin.viewDashboard);

// endpoint user game
router.post(
  "/user-game",
  middleware.checkFieldsPost,
  controllerAdmin.createUserGame
);
router.get("/user-game", controllerAdmin.getAllUserGame);
router.get(
  "/user-game/:id",
  middleware.mustBeInteger,
  controllerAdmin.getOneUserGame
);
router.put("/user-game/:id", controllerAdmin.updateUserGame);
router.delete(
  "/user-game/:id",
  middleware.mustBeInteger,
  controllerAdmin.deleteOneUserGame
);
router.delete("/user-game/", controllerAdmin.deleteAllUserGame);

// endpoint user game history
router.post(
  "/user-game-history",
  middleware.checkFieldsPostUserGameHistory,
  controllerAdmin.createUserGameHistory
);
router.get("/user-game-history", controllerAdmin.getAllUserGameHIstory);
router.get(
  "/user-game-history/:id",
  middleware.mustBeInteger,
  controllerAdmin.getOneUserGameHistory
);
router.put("/user-game-history/:id", controllerAdmin.updateUserGameHistory);
router.delete("/user-game-history/", controllerAdmin.deleteAllUserGameHistory);

// endpoint user game biodata
router.post(
  "/user-game-biodata",
  middleware.checkFieldsPostUserGameBiodata,
  controllerAdmin.createUserGameBiodata
);
router.get("/user-game-biodata", controllerAdmin.getAllUserGameBiodata);
router.get(
  "/user-game-biodata/:id",
  middleware.mustBeInteger,
  controllerAdmin.getOneUserGameBiodata
);
router.put("/user-game-biodata/:id", controllerAdmin.updateUserGameBiodata);
router.delete(
  "/user-game-biodata/:id",
  middleware.mustBeInteger,
  controllerAdmin.deleteOneUserGameBiodata
);
router.delete("/user-game-biodata/", controllerAdmin.deleteAllUserGameBiodata);

module.exports = router;
