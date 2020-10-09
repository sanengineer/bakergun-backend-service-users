const express = require("express");
const router = express.Router();

// redirect admin dashboard
router.get("/", function (req, res, next) {
  res.redirect("/admin/signin");
});
router.get("/admin", function (req, res, next) {
  res.redirect("/admin/signin");
});

module.exports = router;
