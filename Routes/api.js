const express = require("express");
const router = express.Router();
const middleware = require("../Helpers/middlewares");
const controllerApi = require("../Controllers/controller-api");
const restric = require("../Helpers/restric");

// endpoint user game
router.post("/signup", controllerApi.signUpUserGame);
router.post("/login", controllerApi.loginUserGame);
router.get(
  "/user-game/:id",
  middleware.mustBeInteger,
  controllerApi.getOneUserGame
);
router.put("/user-game/:id", controllerApi.updateUserGame);
router.delete(
  "/user-game/:id",
  middleware.mustBeInteger,
  controllerApi.deleteOneUserGame
);

// endpoint user game history
router.post("/user-game-history", restric, controllerApi.createUserGameHistory);
router.get(
  "/user-game-history/:id",
  middleware.mustBeInteger,
  restric,
  controllerApi.getOneUserGameHistory
);
router.put("/user-game-history/:id", controllerApi.updateUserGameHistory);

// endpoint user game biodata
router.post("/user-game-biodata", controllerApi.createUserGameBiodata);
router.get(
  "/user-game-biodata/:id",
  middleware.mustBeInteger,
  controllerApi.getOneUserGameBiodata
);
router.put("/user-game-biodata/:id", controllerApi.updateUserGameBiodata);

module.exports = router;
