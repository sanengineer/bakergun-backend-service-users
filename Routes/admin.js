const express = require("express");
const router = express.Router();
const middleware = require("../Helpers/middlewares");
const controllerUserGame = require("../Controllers/controller-admin");

router.get("/dashboard", controllerUserGame.viewDashboard);
router.post("/", middleware.checkFieldsPost, controllerUserGame.create);
router.get("/", controllerUserGame.getAll);
router.get("/:id", middleware.mustBeInteger, controllerUserGame.getOne);
router.put("/:id", controllerUserGame.update);
router.delete("/:id", middleware.mustBeInteger, controllerUserGame.deleteOne);
router.delete("/", controllerUserGame.deleteAll);

module.exports = router;
