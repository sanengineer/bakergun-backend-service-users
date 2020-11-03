const express = require("express");
const router = express.Router();
const middleware = require("../Helpers/middlewares");
const controllerApi = require("../Controllers/controller-api");

// endpoint user game
router.post("/signup", controllerApi.signUpUserGame);
router.post("/login", controllerApi.loginUserGame);
router.get(
  "/user-game/:id",
  middleware.RestricAccess,
  middleware.mustBeInteger,
  controllerApi.getOneUserGame
);
router.put(
  "/user-game/:id",
  middleware.RestricAccess,
  controllerApi.updateUserGame
);
router.delete(
  "/user-game/:id",
  middleware.mustBeInteger,
  controllerApi.deleteOneUserGame
);

// endpoint user game history
router.post(
  "/user-game-history",
  middleware.RestricAccess,
  controllerApi.createUserGameHistory
);
router.get(
  "/user-game-history/:id",
  middleware.mustBeInteger,
  controllerApi.getOneUserGameHistory
);
router.put(
  "/user-game-history/:id",
  middleware.RestricAccess,
  controllerApi.updateUserGameHistory
);

// endpoint user game biodata
router.post(
  "/user-game-biodata",
  middleware.RestricAccess,
  controllerApi.createUserGameBiodata
);
router.get(
  "/user-game-biodata/:id",
  middleware.mustBeInteger,
  middleware.RestricAccess,
  controllerApi.getOneUserGameBiodata
);
router.put(
  "/user-game-biodata/:id",
  middleware.RestricAccess,
  controllerApi.updateUserGameBiodata
);

module.exports = router;
