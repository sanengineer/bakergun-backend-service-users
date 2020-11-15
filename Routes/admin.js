const express = require("express");
const controllerAdmin = require("../Controllers/controller-admin");
const router = express.Router();

// enpoint admin
// router.get("/user-game", controllerAdmin.getAllUserGame);
router.get("/user-game", controllerAdmin.searchByUsername);

module.exports = router;
