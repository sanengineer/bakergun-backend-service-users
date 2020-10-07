const express = require("express");
const router = express.Router();

router.use("/admin/user", require("./user-game"));

module.exports = router;
