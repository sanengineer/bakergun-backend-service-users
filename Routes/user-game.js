const express = require("express");
const router = express.Router();
const userGame = require("../Controllers/controller-api-user-game");

router.post("/", userGame.create);
