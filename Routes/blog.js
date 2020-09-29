const express = require("express");
const router = express.Router();
const mw = require("../Helpers/middlewares");
const controllerApiBlog = require("../Controllers/controller-api-blog");

// All Posts Blog
router.get("/", controllerApiBlog.posts);

// All Posts Blog By Id
router.get("/:id", mw.mustBeInteger, controllerApiBlog.post);

module.exports = router;
